import {connect} from 'react-redux';
import {loginAsync} from './../../reducer/AuthReducer';
import Registration from './../../component/userManage/Registration';
export default connect()(Registration)