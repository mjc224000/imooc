import Chat from './../../component/Chat/Chat';
import {connect} from 'react-redux';

import{withRouter }  from 'react-router-dom';
const mapStateToProps=({AuthReducer:state})=>{return {...state}};
export default withRouter(  connect(mapStateToProps)(Chat));

