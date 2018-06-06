import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import GeniusInfo from './../../component/GeniusInfo/GeniusInfo';
import axios from 'axios';
import {update} from "../../reducer/AuthReducer";

class GeniusInfoContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            company: null,
            position: null,
            resume: null,
            salary: 0,
            avatar:''
        }
        this.handleValueChange=this.handleValueChange.bind(this)
        this.handleUpdate=this.handleUpdate.bind(this);
    }
    componentDidMount(){
        axios.get('/info/userInfo').then((res)=>{
            this.setState({...res.data.data});
            console.log(res);
        })
    }
    handleValueChange({key, value}) {
        this.setState({[key]: value});
    }
    handleUpdate(){
        this.props.update({...this.state})
    }
    render(){
        if(this.props.isAuth){
            return <GeniusInfo {...this.props} onUpdate={this.handleUpdate} onValueChange={this.handleValueChange} userInfo={{...this.state}} />
        }
        return(<Redirect to={'/login'}/>)
    }
}
function mapDispatchToProps(dispatch) {
    return {update:(option)=>dispatch(update(option)) }
}
export default connect(function (state) {
    return{...state,isAuth:state.auth}
},mapDispatchToProps)(GeniusInfoContainer)