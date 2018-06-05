import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Boss from './../../component/Boss/Boss';
import axios from 'axios';
import {update} from "../../reducer/AuthReducer";

class BossContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            company: null,
            position: null,
            positionDesc: null,
            salary: 0,
            showModal:true,
            avatar:''
        }
        this.handleValueChange=this.handleValueChange.bind(this)
        this.handleUpdate=this.handleUpdate.bind(this);
    }
    componentDidMount(){
          axios.get('/info/bossInfo').then((res)=>{
                 this.setState({...res.data.data});
             })
    }
    handleValueChange({key, value}) {
        console.log(key,value);
        this.setState({[key]: value});
    }
    handleUpdate(){
     this.props.update({...this.state})
    }
    render(){
       if(this.props.isAuth){
            return <Boss {...this.props} onUpdate={this.handleUpdate} onValueChange={this.handleValueChange} userInfo={{...this.state}}/>
        }
        return(<Redirect to={'/login'}/>)
    }
}
function mapDispatchToProps(dispatch) {
    return {update:(option)=>dispatch(update(option)) }
}
export default connect(function (state) {
    return{...state,isAuth:state.auth}
},mapDispatchToProps)(BossContainer)