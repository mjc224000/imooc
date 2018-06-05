import React, {Component} from 'react';
import {TabBar, NavBar, Icon} from 'antd-mobile';
import MyTabBar from './../TabBar/tabBar';
import {Route, Link, withRouter} from 'react-router-dom';
import  PropTypes from 'prop-types';
function Boss() {
    return (<h1>Boss</h1>)
}

function Genius() {
    return (<h1>Genius </h1>)
}

function PersonInfo() {
    return (<h1>PersonInfo </h1>)
}

function Chat() {
    return (<h1>Chat</h1>)
}

const data = [
    {
        title: 'Boss',
        path: '/geniusInfo',
        component: Genius,
        hide: 'Boss'
    },
    {
        title: 'Genius',
        path: '/bossInfo',
        component: Boss,
        hide: 'Genius'
    },
    {
        title: "Personal Info",
        path: '/personalInfo',
        component: PersonInfo,
        hide: ''
    },
    {
        title: 'Chat',
        path: '/chat',
        component: Chat,
        hide: ""
    }
]
export default class TabBarExample extends React.Component {
    static propTypes={
     navList:PropTypes.array.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: true,
        };
      this.handleTabPress=this.handleTabPress.bind(this);
    }

    handleTabPress(url) {
      this.props.onPress(url)
    }

    render() {
        var navList = this.props.navList || data;
        var hide = 'zz';
        console.log(this.props.history);
        navList=navList.filter((v)=>v.hide!==hide);
        return (
            <div style={this.state.fullScreen ? {
                position: 'fixed',
                height: '100%',
                width: '100%',
                top: 0
            } : {height: 400}}>

                <NavBar leftContent={<Icon type={'left'} onClick={() => this.props.history.go(-1)}/>}>
                    {11}
                </NavBar>
                {
                    navList.map(v => {
                    if (1) {
                        return <Route path={v.path} component={v.component}></Route>
                    }
                })}
                <MyTabBar navList={this.props.navList} onPress={this.handleTabPress}/>

            </div>
        );
    }
}
