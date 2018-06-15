import {connect} from 'react-redux';
import MessageList from './../../component/MessageList/MessageList';


function mapStateToProps({Chat: state, AuthReducer: auth}) {
    const {chatmsg, userList} = state;
    let arr = [];
    if (!chatmsg.length || !userList.length) {
        return {msgGroup: []}
    }

    chatmsg.forEach(v => {
        if (!arr[v.chatid]) {
            arr[v.chatid] = [];
        }
        arr[v.chatid].push(v);
    })
    arr = Object.values(arr);

    var res = arr.map(function (v) {

        var last = v[v.length - 1];
        var opposite = last.from === auth._id ? last.to : last.from;
        var oppositeUser=userList.find(v => v._id === opposite);
        return {
            content: last.content,
            title: oppositeUser && oppositeUser.username || '',
            unread: v.filter(item => item.read === false).length
        }
    })

    return {msgGroup: res}
}

export default connect(mapStateToProps)(MessageList)