import React,{Component} from 'react';
import Interviewee from './../../component/Interviewee/Interviewee'
export default class IntervieweeContainer extends Component{
    constructor(props){
        super(props)
    }
    render(){
      return ( <Interviewee/>)
    }
}