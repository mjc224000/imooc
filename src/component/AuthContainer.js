import React,{Component} from 'react';
import Auth from './auth';
import * as AuthReducer from './reducer/auth';
import {connect} from 'react-redux';


function mapStateToProps(state) {
    return {isAuth:state.auth}
}
function mapDispatchToProps(dispatch) {
    return {login:()=>dispatch(AuthReducer.login()),logout:()=>dispatch(AuthReducer.logout())}
}
 class AuthContainer extends Component{
constructor(props){
    super(props);

}
render(){
    console.log(this.props);
    return <Auth {...this.props}/>
}
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer);