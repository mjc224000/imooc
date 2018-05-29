import React, {Component} from 'react';
import {List, InputItem, WhiteSpace, Button} from 'antd-mobile';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLoginClick(e) {
        const {username,password}=this.state;
        this.props.handleLogin({username,password});
    }

    render() {
        const loading=this.props.loading;
        return (
            <List>
                {this.props.auth?"aa":"bb"}
                <InputItem>userName: </InputItem>
                <WhiteSpace/>
                <InputItem>passWord: </InputItem>
                <WhiteSpace/>
                <Button onClick={this.handleLoginClick.bind(this)}>登录{loading?'loading':''}</Button>
            </List>
        )
    }
}


export default Login