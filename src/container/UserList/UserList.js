
import UserList from './../../component/BossList/UserList';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import React, {Component} from 'react';
import {_axios} from "../../reducer/util";
import {getUsrList} from "../../reducer/ChatRedux";

class UserListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {userList: []};
    }
    componentDidMount() {
        const type=this.props.type==='boss'?'genius':'boss';
        this.props.getUserList(type);
    }
    render() {
        return <UserList {...this.props} />
    }
}

const mapStateToProps = ({AuthReducer: state,Chat:chat}) => {
    return {...state,userList:chat.userList};
};
const mapDispatchToProps=(dispatch)=>{
    return{getUserList:(type)=>dispatch(getUsrList(type)) }
}
export default  withRouter( connect(mapStateToProps,mapDispatchToProps)(UserListContainer) );