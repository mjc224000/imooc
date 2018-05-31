import React, {Component} from 'react';
import {List, InputItem, WhiteSpace, Button, Toast, WingBlank, Radio} from 'antd-mobile';
import {Link,Redirect} from 'react-router-dom';
import {createForm, formShape} from 'rc-form';
import propTypes from 'prop-types';
import {register} from "../../reducer/AuthReducer";
import imgURL from './../img/logo.png';
///http://react-component.github.io/form/examples/server-validate.html
const RadioItem = Radio.RadioItem;

export class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            'username': '',
            password: '',
            repeatPassword: '',
            type: 'genius',
            errorMsg:null
        }

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        this.props.register({...this.state});
    }

    handleValueChange(key, value) {
        this.setState({[key]: value});
    }

    render() {
 const {type}=this.state;
 const errorMsg=this.props.errorMsg||this.state.errorMsg;
       const {url}= this.props.redirectTo;

        return (<List>
            {url?<Redirect to={url}/>:null}
            <WingBlank>
                <div style={{textAlign: 'center'}}><img className='logo' src={imgURL}/></div>
            </WingBlank>
            <WingBlank> <div className='validate'>{errorMsg}</div></WingBlank>
            <WingBlank> <InputItem
                onChange={(value) => this.handleValueChange('username', value)}>用户名：</InputItem></WingBlank>
            <p className='validate'> </p>
            <WhiteSpace/>
            <WhiteSpace/>
            <WingBlank> <InputItem   type="password"
                                   onChange={(value) => this.handleValueChange('password', value)}>密码： </InputItem></WingBlank>
            <WhiteSpace/>
            <WingBlank> <InputItem type={'password'}
                onChange={(value) => this.handleValueChange('repeatPassword', value)}>确认密码：</InputItem></WingBlank>
            <WingBlank> <RadioItem key={0} checked={type === 'genius'}
                                   onChange={(value) => this.handleValueChange('type', 'genius')}>
                Genius
            </RadioItem> </WingBlank>
            <WingBlank><RadioItem key={1} checked={type === 'StreetGirl'}
                                  onChange={(value) => this.handleValueChange('type', 'StreetGirl')}> Street
                Girl</RadioItem> </WingBlank>
            <WingBlank> <Button type={'primary'}><Link to={'/login'}>Login</Link></Button></WingBlank>
            <WhiteSpace/>
            <WingBlank> <Button onClick={this.handleSubmit} type={'primary'}>Register</Button></WingBlank>
        </List>)
    }
}

export default Registration;