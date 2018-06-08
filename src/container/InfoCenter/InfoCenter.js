import InfoCenter from './../../component/InfoCenter/InfoCenter';
import {logout} from "../../reducer/AuthReducer";
import {connect} from 'react-redux';
import React,{Component} from 'react';
const mapStateToProps=(state)=>({...state});
const mapDispatchToProps=(dispatch)=>{
    return{onLogout:()=>dispatch(logout()) }
}
export default connect(mapStateToProps,mapDispatchToProps)(InfoCenter);
