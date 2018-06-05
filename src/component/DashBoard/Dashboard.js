import React, {Component} from 'react';
import {TabBar, NavBar, Icon} from 'antd-mobile';
import {Route, Link, withRouter} from 'react-router-dom';

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
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        };
    }
handleTabPress(){

}
    render() {
        var navList = this.props.navList || data;
        var hide = 'Genius';
        console.log(this.props.history);
        return (
            <div style={this.state.fullScreen ? {
                position: 'fixed',
                height: '100%',
                width: '100%',
                top: 0
            } : {height: 400}}>

                <NavBar leftContent={<Icon type={'left'} onClick={() => this.props.history.go(-1)}/>}>
                    {}
                </NavBar>
                {navList.map(v => {
                    if (v.hide !== hide) {
                        return <Route path={v.path} component={v.component}></Route>
                    }
                })}
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    style={{position:'fixed' ,bottom:'0'}}
                >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.props.history.push('/geniusInfo');
                        }}
                        data-seed="logId"
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={{uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'}}
                        selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'}}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >

                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
