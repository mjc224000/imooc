import Chat from './../../component/Chat/Chat';
import {connect} from 'react-redux';
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';

import {sendMsg} from "../../reducer/ChatRedux";

const mapStateToProps = ({AuthReducer: state, chatReducer}) => {
    return {...state, ...chatReducer}
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: (option) => dispatch(sendMsg(option)),
    }
}

class ChatContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Chat {...this.props}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)

