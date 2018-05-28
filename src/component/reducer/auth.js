const LOGIN='LOGIN';
const LOGOUT='LOGOUT';
export default function AuthReducer(state={auth:false},action){
    switch (action.type){
        case LOGIN:return {...state,auth:true};
        case LOGOUT:return{...state,auth:false};
        default :return state
    }
}
export function login(){
    return {type:LOGIN}
}
export function logout() {
    return {type:LOGOUT}
}
