import {connect} from 'react-redux';
import {loginAsync,register} from './../../reducer/AuthReducer';
import Registration from './../../component/userManage/Registration';
function mapDispatchToProps(dispatch) {
    return{register:option=>dispatch(register(option)) }
}
function mapStateToProps({AuthReducer:state}) {
    return{...state,errorMsg:state.registerErrMsg }
}
export default connect(mapStateToProps,mapDispatchToProps)(Registration)