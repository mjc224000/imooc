import React,{Component} from 'react';
export default class InfoCenter extends Component{
    constructor(props){
        super(props);
        this.state={myIndex:0}
    }
    handleKeyDown(){
        const {myIndex}=this.state;
        this.setState({myIndex:myIndex+1});
    }
    render(){
      return(<div onKeyDown={this.handleKeyDown.bind(this)}>
          <input type="text" autoFocus={this.state.myIndex===1}/>
      </div>)
    }
}
