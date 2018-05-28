import {connect} from 'react-redux';
import {loginAsync} from './../reducer/auth';
import Login from './Login';
const mapStateToProps=(state)=>({loading:state.loading});
const mapDispatchToProps=(dispatch)=>{
    return {handleLogin:option=>dispatch(loginAsync(option))  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);