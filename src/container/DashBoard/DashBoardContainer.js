import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter,Redirect} from 'react-router-dom'
import DashBoard from './../../component/DashBoard/Dashboard';
import GeniusList from './../GeniusList/GeniusList';
import InfoCenter from './../InfoCenter/InfoCenter';
import BossContainer from './../BossContainer/BossContainer';
function Chat() {
    return <h2> Chat</h2>
}
const data = [
    {
        title: 'Boss',
        path: '/geniusInfo',
        component: GeniusList,
        hide: 'Boss'
    },
    {
        title: 'Genius',
        path: '/bossInfo',
        component: BossContainer,
        hide: 'Genius'
    },
    {
        title: "Personal Info",
        path: '/personalInfo',
        component: InfoCenter,
        hide: ''
    },
    {
        title: 'Chat',
        path: '/chat',
        component: Chat,
        hide: ""
    }
]
class DashBoardContainer extends Component{
    render(){
        if(!this.props.isAuth){
            return (<Redirect to={'/login'}></Redirect>)
        }
        return <DashBoard {...this.props} navList={data}/>
    }

}
const mapStateToProps=(state)=>{
    return {isAuth:state.auth }
}
export default withRouter(connect(mapStateToProps)(DashBoardContainer));
