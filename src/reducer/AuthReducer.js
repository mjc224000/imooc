import axios from 'axios';
import redirectTo from './utility';

const LOGIN='LOGIN';
const LOGIN_SUCCESS='LOGIN_SUCCESS';
const LOGIN_ERROR='LOGIN_ERROR';
const LOGOUT='LOGOUT';
const LOGIN_ASYNC='LOGIN_ASYNC';
const LOADING='LOADING';
const FINISH='FINISH';
const REGISTER_SUCCESS='REGISTER_SUCCESS';
const REGISTER_ERROR='REGISTER_ERROR';
const CLEAR_LOGIN_ERR_MSG='CLEAR_LOGIN_ERR_MSG';
const Auth={
    auth:false,
    loading:false,
    redirectTo:null,
    registerErrMsg:null,
    loginErrMsg:null
}
//reducer
export default function AuthReducer(state=Auth,action){
    switch (action.type){
        case LOGIN:return {...state,auth:true};
        case LOGIN_SUCCESS:return{...state,auth:true}
        case LOGIN_ERROR:return{...state,auth:false,loginErrMsg:action.errMsg }
        case LOGOUT:return{...state,auth:false};
        case LOADING:return {...state,loading:true};
        case FINISH:return {...state,loading:false};
        case REGISTER_SUCCESS:return{...state,auth:true,registerError:null,redirectTo:action.redirectTo};
        case REGISTER_ERROR:return{...state,auth:false,registerErrMsg:action.errMsg};
        case CLEAR_LOGIN_ERR_MSG:return{...state,loginErrMsg:null}
        default :return state
    }
}
// action create
export function login({username,password,cb}){
   if(!username.trim().length||password.trim().length){
       cb();
       return{type:LOGIN_ERROR,errMsg:'username and password can not be empty'}
   }
    return function (dispatch) {
        axios.post('/user/login',{username,password}).then(function (data) {
           cb();
            console.log(data);
        })
    }
}
function loginSuccess() {
    return {type:LOGIN_SUCCESS}
}
export  function clearLoginErrorMsg() {
    return {type:CLEAR_LOGIN_ERR_MSG}
}
export const loginAsync=(option)=>(dispatch)=>{
    dispatch({type:LOADING});
    setTimeout(function () {
      dispatch({type:LOGIN});
      dispatch({type:FINISH});
    },2000)
}
export function logout() {
    return {type:LOGOUT}
}
function registerError(msg) {
    return{type:REGISTER_ERROR,errMsg:msg}
}
function registerSuccess(type) {
    return {type:REGISTER_SUCCESS ,redirectTo:redirectTo(type)}
}
export function register(option) {
   const {username, repeatPassword,password,type}=option;
     if(username.replace(' ','').length!==username.length)
         return registerError('username cannot contain space');
if(!username.trim().length ||!password.length)
    return registerError('username and password can not be empty');
    if(repeatPassword!=password){
    return registerError('the both input password must be consistent');
   }
   return function (dispatch) {
       axios.post('/user/register',{...option}).then(res=>{

     if(res.status==200 && res.data.code===0){
         dispatch(registerSuccess(type));
     }
          });
   }

}