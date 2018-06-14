import React, {Component} from 'react';
import {TabBar, NavBar, Icon} from 'antd-mobile';
import MyTabBar from './../TabBar/tabBar';
import {Route, Link, withRouter} from 'react-router-dom';
import  PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
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
               height:'100vh',
                width: '100%',
                top: 0,
                display:'flex',
             flexFlow:'column',
              } : {height: 400}}>

                <NavBar className={'header'} leftContent={<Icon type={'left'} onClick={() => this.props.history.go(-1)}/>}>
                    {11}
                </NavBar>
                <div className={'main'}>
                    {
                    navList.map(v => {
                        if(this.props.location.pathname===v.path){
                            return  <QueueAnim> <Route key={v.path} path={v.path} component={v.component}></Route>  </QueueAnim>
                        }

                    })}
                </div>
                <MyTabBar navList={this.props.navList}  _id={this.props._id} getMsg={this.props.getMsg} getMsgList={this.props.getMsgList}  onPress={this.handleTabPress}/>

            </div>
        );
    }
}
