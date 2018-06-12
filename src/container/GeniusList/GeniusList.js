import React,{Component}from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import GeniusList from './../../component/GeniusList/GeniusList';

 class GeniusListContainer extends Component{
    constructor(props){
        super(props);
        this.state={geniusList:[]}
    }
    componentDidMount(props){
        axios.get('/info/List',{params:{type:'genius'}}).then(function (res) {
            if(res.data.code===0&& res.status===200){
                this.setState({geniusList:res.data.data})
            }
        })
    }

    render(){
        return <GeniusList {...this.state}/>
    }
}

export default withRouter(connect((state)=>({...state}))(GeniusListContainer))