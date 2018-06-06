import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom'
import DashBoard from './../../component/DashBoard/Dashboard';
import GeniusList from './../GeniusList/GeniusList';
import InfoCenter from './../InfoCenter/InfoCenter';
import BossContainer from './../BossContainer/BossContainer';
import GeniusContainer from './../GeniusInfo/GeniusInfo'

function Chat() {
    return <h2> Chat</h2>
}

function BossList() {
    return <h2> BossList</h2>
}


const data = [
    {
        path: '/bossList',
        component: BossList,
        hide: 'boss',
        text: '',
        className: 'iconfont icon-shizi'
    },
    {
        path: '/geniusList',
        component: GeniusList,
        hide: 'genius',
        className: 'iconfont icon-superhero-'
    },
    {
        path:'/geniusInfo',
        component:GeniusContainer,
        hide:'boss'
    },
    {
        title: 'Chat',
        path: '/chat',
        component: Chat,
        hide: "",
        className: "iconfont icon-message"

    },
    {
        hide: 'genius',
        component: BossContainer,
        path: '/bossInfo',
        className: 'iconfont icon-yonghuzhongxin'
    }
]

class DashBoardContainer extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(url) {
        this.props.history.push(url);
    }

    render() {
        let navList=data.filter((v)=>v.hide!==this.props.type);
        console.log(navList);
        console.log(this.props.type);;
        if (!this.props.isAuth) {
            return (<Redirect to={'/login'}></Redirect>)
        }
        return <DashBoard {...this.props} navList={navList} onPress={this.handlePress}/>
    }

}

const mapStateToProps = (state) => {
    return {isAuth: state.auth,type:state.type}
}
export default withRouter(connect(mapStateToProps)(DashBoardContainer));
