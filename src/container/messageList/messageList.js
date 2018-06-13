import {connect} from 'react-redux';
import MessageList from './../../component/MessageList/MessageList';

function mapStateToProps({ChatRedux: state}) {
    const {chatmsg} = state;
    const arr = [];
    chatmsg.foreach(v => {
        if (!arr[v.chatid]) {
            arr[v.chatid] = [];
        }
        arr[v.chatid].push(v);
    })
    arr.map(function (v) {
        var last = v[v.length - 1];
        var opposite = last.from === state._id ? last.to : last.from;
        return {
            content: last.content,

        }
    })
    return {}
}

connect(mapStateToProps)(MessageList)