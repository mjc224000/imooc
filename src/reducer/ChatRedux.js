import {_axios} from "./util";
import io from 'socket.io-client';
const socket = io('ws://localhost:9093/');
const MSG_LIST = 'MSG_LIST';
const MSG_RECV = 'MSG_RECV';
const MSG_READ = 'MSG_READ';
const CLOSE_MSG = 'CLOSE_MSG';
const SEND_MSG = 'SEND_MSG';
const initState = {
    chatmsg: [],
    unread: 0,
}
var i=0;
function index() {
    return i+1;
}

export default function chatReducer(state = initState, action) {
    switch (action.type) {
        case MSG_LIST:
            return {
                ...state, chatmsg: action.payload,
                unread: action.payload.filter(v => !v.read).length
            }
            //current chat user
        case MSG_RECV: {
            return {...state, chatmsg: [...state.chatmsg, action.payload]}
        }
        case MSG_READ:
        case CLOSE_MSG:
        case SEND_MSG:
        default:
            return state
    }
}

function msgList(msg) {
    return {type: MSG_LIST, payload: msg}
}

function msgRecv(msg) {
    return {type: MSG_RECV, payload: msg};
}

export function getMsg( addr) {
    return dispatch => {
        console.log(addr,'addr');
        socket.on(addr, function (data) {
            dispatch(msgRecv(data))
        })
    }
}

export function sendMsg({from, to, msg}) {
    socket.emit('sendmsg', {from, to, msg})
return {type:SEND_MSG};
}

export function getMsgList(_id) {
    return dispatch => {
        _axios.get('/msg/getMsgList', {params: {_id}}).then(res => {
            if (res.state == 200 && res.data.code == 0) {
                dispatch(msgList(res.data.data))
            }
        })
    }
}
export  function socketClose() {
    socket.close()
    return {type:''}
}