import axios from 'axios';
import redirectTo from './utility';

const LOGIN='LOGIN';
const LOGOUT='LOGOUT';
const LOGIN_ASYNC='LOGIN_ASYNC';
const LOADING='LOADING';
const FINISH='FINISH';
const REGISTER_SUCCESS='REGISTER_SUCCESS';
const REGISTER_ERROR='REGISTER_ERROR';
const Auth={
    auth:false,
    loading:false,
    redirectTo:null,
    registerErrMsg:null,
}
//reducer
export default function AuthReducer(state=Auth,action){
    switch (action.type){
        case LOGIN:return {...state,auth:true};
        case LOGOUT:return{...state,auth:false};
        case LOADING:return {...state,loading:true};
        case FINISH:return {...state,loading:false};
        case REGISTER_SUCCESS:return{...state,auth:true,registerError:null,redirectTo:action.redirectTo};
        case REGISTER_ERROR:return{...state,auth:false,registerErrMsg:action.errMsg}
        default :return state
    }
}
// action create
export function login(){
    return {type:LOGIN}
}
export const loginAsync=(option)=>(dispatch)=>{
    dispatch({type:LOADING});
    setTimeout(function () {
      dispatch(login());
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