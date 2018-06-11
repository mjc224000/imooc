import React, {Component} from 'react';
import {InputItem ,Button,List} from 'antd-mobile';
import './chat.css';


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state={text:''}
        this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
handleSubmit(){
//socket.emit('sendmsg',{text:this.state.text});
    this.props.history
    this.props.sendMsg()
this.setState({text:''})

}
handleChange(v){
        this.setState({text:v })
}

componentDidMount(){
this.props.getMsgList();
this.props.recvMsg()

}

    render() {
        const Item=List.Item
        return (
            <div className='chat'>
                <div className='chat-list'>
                    <List>
                       {/* {this.props.chat.chatmsg.map((v)=>{
                            <Item>

                            </Item>
                        })}*/}
                    </List>

                </div>
                <div className='chat-footer'>
                    <InputItem className='chat-footer-input'
                                  placeholder={'请输入...'}
                               onChange={(v)=>this.handleChange(v)}
                                  value={this.state.text}
                               extra={<span type={'primary'} onClick={this.handleSubmit}>提交</span>}
                    />

                </div>

            </div>
        )
    }
}

export default Chat;