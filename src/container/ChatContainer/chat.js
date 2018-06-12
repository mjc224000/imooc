import Chat from './../../component/Chat/Chat';
import {connect} from 'react-redux';
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';

import {getMsg, sendMsg, socketClose} from "../../reducer/ChatRedux";

const mapStateToProps = ({AuthReducer: state, chatReducer}) => {
    return {...state, ...chatReducer}
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: (option) => dispatch(sendMsg(option)),
        getMsg: (option) => dispatch(getMsg(option)),
        socketClose: () => dispatch(socketClose())
    }
}

class ChatContainer extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {

    }

    componentWillUnmount () {

    }


    render() {
        return <Chat {...this.props}/>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatContainer));

