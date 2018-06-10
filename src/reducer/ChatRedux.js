import {_axios} from "./util";
import io from 'socket.io-client';
import chat from "../container/ChatContainer/chat";
const socket = io('ws://localhost:9093/');
const MSG_LIST='MSG_LIST';
const MSG_RECV='MSG_RECV';
const MSG_READ='MSG_READ';
const initState={
    chatmsg:[],
    unread:0,
}
export default function chatReducer(state=initState,action) {
    switch (action.type){
        case MSG_LIST:
            return {...state,chatmsg:action.payload,
            unread:action.payload.filter(v=>!v.read).length}
        case MSG_RECV:return {...state,chatmsg:[...state.chatmsg,action.payload]}
        case MSG_READ:
        default:
            return state
    }
}
function msgList(msg) {
    return{ type:MSG_LIST,payload:msg}
}
function msgRecv(msg) {
    return {type:MSG_RECV,payload:msg};
}
export function getMsg(msg) {
    return dispatch=>{
        socket.on('boradcast',function (data) {
            console.dir(data,'bodada');
        })
    }
}
export function getMegList() {
    return dispatch=>{
      _axios.get('/user/getmsglist').then(res=>{
          if(res.state==200 && res.data.code==0){
              dispatch(msgList(res.data.msgs))
          }
      })
    }
}