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
        hide: 'Boss',
        text:'',
        className:'iconfont icon-shizi'
    },
    {
        title: 'Genius',
        path: '/bossInfo',
        component: BossContainer,
        hide: 'Genius',
        className:'iconfont icon-superhero-'
    },
    {
        title: "Personal Info",
        path: '/personalInfo',
        component: InfoCenter,
        hide: '',
        className:'iconfont icon-yonghuzhongxin'
    },
    {
        title: 'Chat',
        path: '/chat',
        component: Chat,
        hide: "",
        className:"iconfont icon-message"

    }
]
class DashBoardContainer extends Component{
    constructor(props){
        super(props);
     this.handlePress=this.handlePress.bind(this);
    }
    handlePress(url){
        this.props.history.push(url);
    }
    render(){
        if(!this.props.isAuth){
            return (<Redirect to={'/login'}></Redirect>)
        }
        return <DashBoard {...this.props} navList={data} onPress={this.handlePress}/>
    }

}
const mapStateToProps=(state)=>{
    return {isAuth:state.auth }
}
export default withRouter(connect(mapStateToProps)(DashBoardContainer));
