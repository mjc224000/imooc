import Chat from './../../component/Chat/Chat';
import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';
import {getMsg, sendMsg} from "../../reducer/ChatRedux";

const mapStateToProps = ({AuthReducer: state, chatReducer}) => {
    return {...state, ...chatReducer}
};
const mapDispatchToProps = (dispatch) => {
    return {sendMsg: (option) => dispatch(sendMsg(option)), getMsg: (option) => dispatch(getMsg(option))}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));

