import React, {Component} from 'react';
import {List, InputItem, WhiteSpace, Button, WingBlank} from 'antd-mobile';
import {Link} from 'react-router-dom';
import './Login.css';
import imgURL from './../img/logo.png'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLoginClick(e) {
        const {username, password} = this.state;
        this.props.handleLogin({username, password});
    }

    render() {
        const loading = this.props.loading;
        console.log(this.props, 'from log')
        return (
            <List>
                <WingBlank ><div style={{textAlign:'center'}}><img className='logo' src={imgURL}/>  </div> </WingBlank>
                <WingBlank> <InputItem>userName: </InputItem> </WingBlank>
                <WhiteSpace/>
                <WingBlank><InputItem>passWord: </InputItem></WingBlank>
                <WhiteSpace/>
                <WingBlank> <Button onClick={this.handleLoginClick.bind(this)}>{loading ? 'loading' : 'Login'}</Button></WingBlank>
                <WingBlank> <Button><Link to={'/registration'}>Register</Link></Button></WingBlank>
            </List>
        )
    }
}

export default Login