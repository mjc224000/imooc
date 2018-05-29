import React, {Component} from 'react';
import { Redirect, Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import BossContainer from './../container/BossContainer/BossContainer';
import IntervieweeContainer from './../container/Interviewee/Interviewee'
import LoginContainer from './../container/userManage/LoginContainer';
import {login} from "../reducer/AuthReducer";

const Interviewee = '/interviewee',
    Boss = '/boss';
const mapStateToProps = (state) => ({isAuth: state.auth});

//Protected page
let PrivateRoute = ({ component: Component,isAuth, ...rest }) => {
    console.log(isAuth);
    return(
    <Route
        {...rest}
        render={props =>
            (isAuth)? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
)};
PrivateRoute=connect(mapStateToProps)(PrivateRoute)
class Auth extends Component {
    render() {
        const isAuth = this.props.isAuth;
        console.log(isAuth);
        return (
                  <div>
                 <Route path={'/boss'} component={BossContainer}/>
                    <PrivateRoute path={'/interviewee'} isAuth={isAuth}  component={IntervieweeContainer}/>
                  </div>
          )

                }}
export default connect(mapStateToProps)(Auth)
