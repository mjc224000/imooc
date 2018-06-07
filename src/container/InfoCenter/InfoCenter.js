import InfoCenter from './../../component/InfoCenter/InfoCenter';
import {connect} from 'react-redux';
import React,{Component} from 'react';
const mapStateToProps=(state)=>({...state})
export default connect(mapStateToProps)(InfoCenter);
