import {connect} from 'react-redux';
import {loginAsync} from './../../reducer/AuthReducer';
import Login from './../../component/userManage/Login';
const mapStateToProps=(state)=>({loading:state.loading,isAuth:state.auth,...state});
const mapDispatchToProps=(dispatch)=>{
    return {handleLogin:option=>dispatch(loginAsync(option))  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);