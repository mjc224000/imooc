import {connect} from 'react-redux';
import {login} from './../../reducer/AuthReducer';
import Login from './../../component/userManage/Login';
const mapStateToProps=(state)=>({isAuth:state.auth,errMsg:state.loginErrMsg,...state,redirectTo:state.redirectTo});
const mapDispatchToProps=(dispatch)=>{
    return {handleLogin:option=>dispatch(login(option)) }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);