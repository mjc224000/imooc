import axios from 'axios';
import {getRedirectPath} from "./util";

const REGISTER_SUCCESS='REGISTER_SUCCESS',
    ERROR_MSG='ERROR_MSG'
const iniState={
    redirectTo:'',
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:''
}//reducer
export function user(state=iniState,action) {
    switch (action.type){
        case REGISTER_SUCCESS:
            return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload }
        case ERROR_MSG:
            return{...state,msg:'',redirectTo:"",isAuth:false,...action.payload}
    }
}