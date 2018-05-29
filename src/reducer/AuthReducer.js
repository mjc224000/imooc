const LOGIN='LOGIN';
const LOGOUT='LOGOUT';
const LOGIN_ASYNC='LOGIN_ASYNC';
const LOADING='LOADING';
const FINISH='FINISH';
const Auth={
    auth:false,
    loading:false,
}
export default function AuthReducer(state=Auth,action){
    switch (action.type){
        case LOGIN:return {...state,auth:true};
        case LOGOUT:return{...state,auth:false};
        case LOADING:return {...state,loading:true};
        case FINISH:return {...state,loading:false};
        default :return state
    }
}
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
