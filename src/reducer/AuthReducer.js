import axios from 'axios';
import {getRedirectPath} from './util';
import {_axios} from "./util";

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
    avatar:null,
    resume:null,
    positionDesc:null,
    userList:[]
}
//reducer
export default function AuthReducer(state = Auth, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, auth: true,...action.payload,
                loading:false,
                redirectTo:getRedirectPath({type:action.payload.type,avatar:action.payload.avatar})
            }
        case LOGIN_ERROR:
            return {...state, auth: false, loginErrMsg: action.errMsg}
        case LOGOUT:
            return {...Auth, auth: false};
        case REGISTER_ERROR:
            return {...state, auth: false, registerErrMsg: action.errMsg};
        case BEGIN_AXIOS:
            return {...state, loading: true};
        case AXIOS_FINISH:
            return {...state, loading: false};
        case REDIRECT_TO :{return {...state,redirectTo:''}};
        case UPDATE:
            return{...state,loading:false,...action.payload}
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

     _axios.post('/user/login', {username, password}).then((res)=>
         {
             if(res.status===200){
                 dispatch(authSuccess({...res.data.data}));
             }
         }
     )
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
    const {username, repeatPassword, password} = option;
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

        _axios.post('/user/register', {...option}).then(res => {

            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess({...res.data.data}));
            }
        });
    }

}
//不需要写里面的啊 大哥
export const update = (option) => (dispatch) => {
    _axios.get('/info/userUpdate',{params:{...option}}).then(res=>{
       dispatch({type:UPDATE,payload:res.data.data})
    })
}
