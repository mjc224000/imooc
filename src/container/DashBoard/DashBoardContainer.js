import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom'
import DashBoard from './../../component/DashBoard/Dashboard';
import GeniusList from './../GeniusList/GeniusList';
import BossContainer from './../BossContainer/BossContainer';
import GeniusContainer from './../GeniusInfo/GeniusInfo';
import UserListContainer from './../UserList/UserList';
import InfoCenter from './../InfoCenter/InfoCenter';
import Chat from './../ChatContainer/chat';
import {getMsg} from './../../reducer/ChatRedux';
import {getMsgList} from "../../reducer/ChatRedux";

const data = [
    {
        path: '/UserList',
        component: UserListContainer,
        className: 'iconfont icon-shizi',
        title: '信息列表'
    },

    {
        path: '/geniusInfo',
        component: GeniusContainer,
        hide: 'boss',
        className: 'iconfont icon-yonghuzhongxin',
        title: '用户中心'
    },
    {
        title: 'Chat',
        path: '/chat',
        component: Chat,
        hide: "",
        className: "iconfont icon-message",
        title: '消息中心',
        deTabBar: true

    },
    {
        hide: 'genius',
        component: BossContainer,
        path: '/bossInfo',
        className: 'iconfont icon-yonghuzhongxin',
        title: '用户中心'
    },
    {
        hide: '',
        component: InfoCenter,
        path: '/InfoCenter',
        className: 'iconfont icon-yonghuzhongxin',
        title: '用户中心'
    }
]
let isFirstOn = false;

class DashBoardContainer extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(url) {
        this.props.history.push(url);
    }

    render() {
        let navList = data.filter((v) => v.hide !== this.props.type);
        if (!this.props.isAuth) {
            console.log(this.props);
            return (<Redirect to={'/login'}></Redirect>)
        }
        return <DashBoard {...this.props} navList={navList} onPress={this.handlePress}/>
    }

}

const mapStateToProps = ({AuthReducer: state}) => {
    return {isAuth: state.auth, type: state.type, loading: state.loading, _id: state._id}
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMsg: (id) => dispatch(getMsg(id)),
        getMsgList:(id)=>dispatch(getMsgList(id))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer));
