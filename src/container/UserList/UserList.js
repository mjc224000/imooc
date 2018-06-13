
import UserList from './../../component/BossList/UserList';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import React, {Component} from 'react';
import {_axios} from "../../reducer/util";
class UserListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {userList: []};
    }
    componentDidMount() {
        const type=this.props.type==='boss'?'genius':'boss';
        _axios.get('/info/List', {
            params: {
                type:type
            }
        }).then((res) => {
            if (res.status === 200 && res.data.code === 0) {
                this.setState({userList: res.data.data})
            }
        })
    }
    render() {
        return <UserList {...this.props} userList={this.state.userList}/>
    }
}

const mapStateToProps = ({AuthReducer: state}) => {
    return {...state};
};

export default  withRouter( connect(mapStateToProps)(UserListContainer) );