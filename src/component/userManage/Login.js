import React, {Component} from 'react';
import {Button, InputItem, List, WhiteSpace, WingBlank} from 'antd-mobile';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Login.css';
import imgURL from './../img/logo.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: '',
        }
        this.handleOnchange = this.handleOnchange.bind(this);

    }

    componentWillMount() {
        var username = localStorage.getItem('username');

        if (username) {
            this.setState({username: username.toString()});
        }
    }


    handleLoginClick(e) {

        const {username, password} = this.state;
        localStorage.setItem('username', username);
        this.props.handleLogin({username, password});
    }

    handleOnchange(key, val) {
        this.setState({[key]: val});

    }

    render() {

        const errorMsg = this.props.errMsg;
       console.log(this.props);
        return (

            <List>
                {  this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                <WingBlank>
                    <div style={{textAlign: 'center'}}><img className='logo' src={imgURL}/></div>
                </WingBlank>
                <WingBlank>
                    <div className='validate'>{errorMsg}</div>
                </WingBlank>
                <WingBlank> <InputItem value={this.state.username ? this.state.username : null}
                                       onChange={(val) => this.handleOnchange('username', val)}>username: </InputItem>
                </WingBlank>
                <WhiteSpace/>
                <WingBlank><InputItem type={'password'}
                                      onChange={(val) => this.handleOnchange('password', val)}>password: </InputItem></WingBlank>
                <WhiteSpace/>
                <WingBlank> <Button type={'primary'}
                                    onClick={this.handleLoginClick.bind(this)}>{'Login'}</Button></WingBlank>
                <WhiteSpace/>
                <WingBlank> <Button type={'primary'}><Link to={'/registration'}>Register</Link></Button></WingBlank>
                <WhiteSpace/>
            </List>
        )
    }
}

export default Login