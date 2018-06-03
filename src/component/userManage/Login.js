import React, {Component} from 'react';
import {List, InputItem, WhiteSpace, Button, WingBlank,Toast} from 'antd-mobile';
import {Link} from 'react-router-dom';
import './Login.css';
import imgURL from './../img/logo.png';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading:true
        }
        this.handleOnchange=this.handleOnchange.bind(this);
        this._callback=this._callback.bind(this);
    }
    _callback(url){
        Toast.hide();
        if(url){
            console.log(url);

            this.props.history.push(url);
        }
    }

    handleLoginClick(e) {
        Toast.loading('loading',60);
        let cb=this._callback;
        const {username, password} = this.state;

        this.props.handleLogin({username, password,cb});
    }
   handleOnchange(key,val){
        this.setState({[key]:val});

   }

    render() {
const errorMsg=this.props.errMsg;
        console.log(require('./Login.css'));
        return (
            <List>
                <WingBlank ><div style={{textAlign:'center'}}><img className='logo' src={imgURL}/>  </div> </WingBlank>
                <WingBlank> <div className='validate'>{errorMsg}</div></WingBlank>
                <WingBlank> <InputItem onChange={(val)=>this.handleOnchange('username',val)}>userName: </InputItem> </WingBlank>
                <WhiteSpace/>
                <WingBlank><InputItem type={'password'} onChange={(val)=>this.handleOnchange('password',val)}>passWord: </InputItem></WingBlank>
                <WhiteSpace/>
                <WingBlank> <Button  type={'primary'} onClick={this.handleLoginClick.bind(this)}>{'Login'}</Button></WingBlank>
                <WhiteSpace/>
                <WingBlank> <Button  type={'primary'} ><Link to={'/registration'}>Register</Link></Button></WingBlank>
                <WhiteSpace/>
            </List>
        )
    }
}

export default Login