import {connect} from 'react-redux';
import {loginAsync,login,clearLoginErrorMsg} from './../../reducer/AuthReducer';
import Login from './../../component/userManage/Login';
const mapStateToProps=(state)=>({loading:state.loading,isAuth:state.auth,errMsg:state.loginErrMsg,...state});
const mapDispatchToProps=(dispatch)=>{
    return {handleLogin:option=>dispatch(login(option)),clearMsg:dispatch(clearLoginErrorMsg) }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);