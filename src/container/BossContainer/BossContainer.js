import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Boss from './../../component/Boss/Boss';
 class BossContainer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.isAuth){
            return <Boss/>
        }
        return(<Redirect to={'/login'}/>)
    }
}
export default connect(function (state) {
    return{isAuth:state.auth}
})(BossContainer)