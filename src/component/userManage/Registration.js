import React, {Component} from 'react';
import {List, InputItem, WhiteSpace, Button,Toast} from 'antd-mobile';
class Registration extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false,
            username:'',
            phone:'',
            password:'',
            confirmPassword:''
        }
   this.handlePasswordChange=this.handlePasswordChange.bind(this);
    }
    handlePasswordChange(e){

    }
    render(){
        return( <List>
            <InputItem>用户名： </InputItem>
            <WhiteSpace/>
            <InputItem>注册： </InputItem>
            <WhiteSpace/>
            <InputItem onChange={this.handlePasswordChange}>密码： </InputItem>
            <WhiteSpace/>
            <InputItem>确认密码：</InputItem>
        </List>)
    }
}