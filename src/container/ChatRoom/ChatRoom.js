import React, {Component} from 'react';
import io from 'socket.io-client';
const socket=io('ws://localhost:3000/');
class ChatRoom extends Component {
constructor(props){
    super(props);
    this.state={value:'' }
}
handleSubmit(){
socket.emit('message',{msg:this.state.value});
}
componentDidMount(){
    socket.on('message',(obj)=>this.setState({value:obj.msg}))
}
    render() {
        console.log(io.connect);
        return (<div>
            <textarea value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}  rows={"10"} cols={'20'} >
               asdasd
            </textarea>
         <button onClick={this.handleSubmit.bind(this)}>submit</button>
        </div>)
    }
}

export default ChatRoom