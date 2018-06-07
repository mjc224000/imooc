import React, {Component} from 'react';
import {TabBar, NavBar, Icon} from 'antd-mobile';
import MyTabBar from './../TabBar/tabBar';
import {Route, Link, withRouter} from 'react-router-dom';
import  PropTypes from 'prop-types';

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
        var navList = this.props.navList || [];
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
