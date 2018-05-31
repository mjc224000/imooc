import axios from 'axios';
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
    redirectTo:'',
    registerErrMsg:'',
}
//reducer
export default function AuthReducer(state=Auth,action){
    switch (action.type){
        case LOGIN:return {...state,auth:true};
        case LOGOUT:return{...state,auth:false};
        case LOADING:return {...state,loading:true};
        case FINISH:return {...state,loading:false};
        case REGISTER_SUCCESS:return{...state,auth:true};
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
export function register(option) {
   const {repeatPassword,password}=option;

    if(repeatPassword!=password){
       return registerError('the both input password must be consistent')
   }
   return function (dispatch) {
       axios.get('/data').then(val=>{
           console.log(val);})
   }

}