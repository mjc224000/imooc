import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Boss from './../../component/Boss/BossInfo';

import {update} from "../../reducer/AuthReducer";

class BossContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            company: null,
            position: null,
            positionDesc: null,
            salary: 0,
            avatar:'',
            _id:null
        }
        this.handleValueChange=this.handleValueChange.bind(this)
        this.handleUpdate=this.handleUpdate.bind(this);
    }
    componentDidMount(){
   const{company,position,positionDesc,salary,avatar,_id}=this.props;
        this.setState({company,position,positionDesc,salary,avatar,_id});
    }
    handleValueChange({key, value}) {
        console.log(key, value);
        this.setState({[key]: value});
    }
    handleUpdate(){
     this.props.update({...this.state})
    }
    render(){
       if(this.props.isAuth){
            return <Boss {...this.props} {...this.state} onUpdate={this.handleUpdate} onValueChange={this.handleValueChange}  />
        }
        return(<Redirect to={'/login'}/>)
    }
}
function mapDispatchToProps(dispatch) {
    return {update:(option)=>dispatch(update(option)) }
}
export default connect(function ({AuthReducer:state}) {
    return{...state,isAuth:state.auth,_id:state._id}
},mapDispatchToProps)(BossContainer)