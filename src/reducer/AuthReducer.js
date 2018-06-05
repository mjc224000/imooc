import axios from 'axios';
import {getRedirectPath} from './util';

const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGOUT = 'LOGOUT';
const REGISTER_ERROR = 'REGISTER_ERROR';
const AUTH_SUCCESS='AUTH_SUCCESS';
const Auth = {
    auth: false,
    loading: false,
    registerErrMsg: null,
    loginErrMsg: null
}
//reducer
export default function AuthReducer(state = Auth, action) {

    switch (action.type) {
        case AUTH_SUCCESS: return{...state,auth:true}
        case LOGIN_ERROR:
            return {...state, auth: false, loginErrMsg: action.errMsg}
        case LOGOUT:
            return {...state, auth: false};
        case REGISTER_ERROR:
            return {...state, auth: false, registerErrMsg: action.errMsg};
        default :
            return state
    }
}

// action create
export function login({username, password, cb}) {
    if (!username.length || !password.length) {
        cb();
        return {type: LOGIN_ERROR, errMsg: 'username and password can not be empty'}
    }
    return function (dispatch) {
        axios.post('/user/login', {username, password}).then(function (res) {
            if (res.status === 200 && res.data.code === 0) {
                const {type,avatar} = res.data.data;
                dispatch(authSuccess());
                cb(getRedirectPath({type,avatar}));
            } else {
                cb();
                return dispatch(loginErr('网络错误'))
            }

        })
    }
}
function authSuccess() {
    return {type:AUTH_SUCCESS}
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
export function register(option) {
    const {username, repeatPassword, password, type, cb} = option;
    if (username.replace(' ', '').length !== username.length) {
        cb();
        return registerError('username cannot contain space');
    }
    if (!username.trim().length || !password.length) {
        cb();
        return registerError('username and password can not be empty');
    }
    if (repeatPassword !== password) {
        cb();
        return registerError('the both input password must be consistent');
    }
    return function (dispatch) {
        axios.post('/user/register', {...option}).then(res => {

            if (res.status === 200 && res.data.code === 0) {

                cb(getRedirectPath({type,avatar:null}))
                dispatch(authSuccess());
            }
        });
    }

}
export  const update=(option)=>(dispatch)=>{
    axios.get('/info/bossUpdate',{params:{...option}}).then(res=>{
        console.log(res.data);
    })
   console.log({...option})
}