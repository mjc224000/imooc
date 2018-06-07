import React,{Component}from 'react'
import {Toast} from 'antd-mobile';
import {connect} from 'redux-thunk';
const mapStateToProps=(state)=>{
    return {loading:state.loading}
}
function MyToast(props) {
  props.loading?Toast.loading('loading',0):Toast.hide();
    return <i></i>
}

export default connect(mapStateToProps)(MyToast);