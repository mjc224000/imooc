import axios from 'axios';
import {getRedirectPath} from './util';

const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGOUT = 'LOGOUT';
const REGISTER_ERROR = 'REGISTER_ERROR';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const BEGIN_AXIOS = 'BEGINAXIOS';
const AXIOS_FINISH = 'AXIOSFINISH';
const UPDATE='UPDATE';
const REDIRECT_TO='REDIRECT_TO';
const Auth = {
    auth: false,
    loading: false,
    registerErrMsg: null,
    loginErrMsg: null,
    type: null,
    username: null,
    _id: null,
    redirectTo:null,
    avatar:null
}
//reducer
export default function AuthReducer(state = Auth, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, auth: true,
                type: action.payload.type,
                username: action.payload.username,
                _id: action.payload._id,
                loading:false,
                redirectTo:getRedirectPath({type:action.payload.type,avatar:action.payload.avatar})
            }
        case LOGIN_ERROR:
            return {...state, auth: false, loginErrMsg: action.errMsg}
        case LOGOUT:
            return {...state, auth: false};
        case REGISTER_ERROR:
            return {...state, auth: false, registerErrMsg: action.errMsg};
        case BEGIN_AXIOS:
            return {...state, loading: true};
        case AXIOS_FINISH:
            return {...state, loading: false};
        case REDIRECT_TO :{return {...state,redirectTo:''}}
        default :
            return state
    }
}

// action create
export function login({username, password}) {
    if (!username.length || !password.length) {
        return {type: LOGIN_ERROR, errMsg: 'username and password can not be empty'}
    }
    return function (dispatch) {
        axios.post('/user/login', {username, password}).then(function (res) {
            if (res.status === 200 && res.data.code === 0) {
                const {type, avatar, username, _id} = res.data.data;
                dispatch(authSuccess({type, username, _id,avatar}));
            } else {
                dispatch(loginErr('用户名密码错误'))
            }

        })
    }
}

function authSuccess(payload) {
    return {type: AUTH_SUCCESS, payload}
}

function loginErr(errMsg) {
    return {type: LOGIN_ERROR, errMsg}
}

export function logout() {
    return {type: LOGOUT}
}

function registerError(msg) {
    return {type: REGISTER_ERROR, errMsg: msg}
}

export function beginAxios() {
    return {type: BEGIN_AXIOS}
}

export function axiosFinish() {
    return {type: AXIOS_FINISH};
}

export function register(option) {
    const {username, repeatPassword, password, type, cb} = option;
    if (username.replace(' ', '').length !== username.length) {

        return registerError('username cannot contain space');
    }
    if (!username.trim().length || !password.length) {

        return registerError('username and password can not be empty');
    }
    if (repeatPassword !== password) {

        return registerError('the both input password must be consistent');
    }
    return function (dispatch) {
        dispatch({type: BEGIN_AXIOS})
        axios.post('/user/register', {...option}).then(res => {

            if (res.status === 200 && res.data.code === 0) {
                const {type, _id, username} = res.data.data
                dispatch(authSuccess({type, _id, username}));
            }
        });
    }

}

export const update = (option) => (dispatch) => {}