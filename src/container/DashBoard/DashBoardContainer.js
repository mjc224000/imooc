import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import DashBoard from './../../component/DashBoard/Dashboard';

export default withRouter(connect()(DashBoard))