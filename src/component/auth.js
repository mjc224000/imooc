import React,{Component} from 'react';
export default class Auth extends Component{
    constructor(props){
   super(props);
    }
 handleLoginClick(){
        this.props.login();
 }
 hanleLogoutClick(){
        this.props.logout();
 }
    render(){
        const isAuth=this.props.isAuth;
        return (<div>
            {isAuth?'welcome to Gromout':"please ;login"}
            <button onClick={this.handleLoginClick.bind(this)}>login</button> <button onClick={this.hanleLogoutClick.bind(this)}>logout</button>
        </div> )
    }
}