import React, {Component} from 'react';
import {List, InputItem, WhiteSpace, Button, Toast, WingBlank, Radio} from 'antd-mobile';
import {Link} from 'react-router-dom';
import imgURL from './../img/logo.png';

const RadioItem = Radio.RadioItem;
export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            username: '',
            phone: '',
            password: '',
            confirmPassword: '',
            type:'genius'
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleTypeChange=this.handleTypeChange.bind(this);
    }

    handlePasswordChange(e) {

    }
    handleTypeChange(value){
        this.setState({type:value});
    }
    render() {
        const {type}=this.state
        return (<List>
            <WingBlank>
                <div style={{textAlign: 'center'}}><img className='logo' src={imgURL}/></div>
            </WingBlank>
            <WingBlank> <InputItem>用户名： </InputItem></WingBlank>
            <WhiteSpace/>
            <WingBlank> <InputItem>注册： </InputItem></WingBlank>
            <WhiteSpace/>
            <WingBlank> <InputItem onChange={this.handlePasswordChange}>密码： </InputItem></WingBlank>
            <WhiteSpace/>
            <WingBlank> <InputItem>确认密码：</InputItem></WingBlank>
            <WingBlank> <RadioItem key={0} checked={type==='genius'} onChange={() => this.handleTypeChange('genius')}>
                Genius
            </RadioItem> </WingBlank>
            <WingBlank><RadioItem key={1} checked={type==='StreetGirl'} onChange={()=>this.handleTypeChange('StreetGirl') }> Street Girl</RadioItem> </WingBlank>
            <WingBlank> <Button><Link to={'/login'}>Login</Link></Button></WingBlank>
            <WingBlank> <Button><Link to={'/registration'}>Register</Link></Button></WingBlank>
        </List>)
    }
}