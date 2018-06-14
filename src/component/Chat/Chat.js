import React, {Component} from 'react';
import {InputItem, List} from 'antd-mobile';
import './chat.css';
import {logout} from "../../reducer/AuthReducer";
import Animate from 'rc-queue-anim';
class Chat extends Component {
    static defaultProps = {
        chatmsg: []
    }

    constructor(props) {
        super(props);
        this.state = {text: ''}
        this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.chatList=React.createRef();
    }

    handleSubmit() {

        const {_id} = this.props
        this.props.sendMsg({
            from: _id,
            to: this.props.location.query.id,
            msg: this.state.text
        })
        this.setState({text: ''})
        this.scrollToBottom();
    }
    handleChange(v) {
        this.setState({text: v})
    }
    componentDidMount(){
     this.scrollToBottom();
    }
    /* 设置滚动条到底部，在didMount和Click之后调用*/
    scrollToBottom(){
        setTimeout(()=>{

            var target=this.chatList.current;
            var scrollTop=target.scrollHeight-target.clientHeight;
            console.log(scrollTop);
            target.scrollTo(0,scrollTop) }  ,200);
    }
    render() {
        const Item = List.Item
    const curId=this.props.location.query.id
      const curChatMsg=this.props.chatmsg.filter(v=>v.from===curId || v.to===curId);
        var len=curChatMsg.length;
        return (
            <div ref={this.chatList} className='chat'>
                <div    className='chat-list'>
                    <List>
                        { len>15? curChatMsg.map((v,i) => {
                            return v.from === this.props._id ?
                                <Item key={i} extra={<img src={this.props.avatar} alt=""/>}>{v.content}</Item> :
                                <Item key={i} thumb={<img src={this.props.location.query.avatar}/>   }>{v.content}</Item>
                        })
                        : <Animate delay={30} >
                            {curChatMsg.map((v,i) => {
                                return v.from === this.props._id ?
                                    <Item key={i} extra={<img src={this.props.avatar} alt=""/>}>{v.content}</Item> :
                                    <Item key={i} thumb={<img src={this.props.location.query.avatar}/>   }>{v.content}</Item>
                            })}
                        </Animate>}
                    </List>
                </div>
                <div className='chat-footer'>
                    <InputItem className='chat-footer-input'
                               placeholder={'请输入...'}
                               onChange={(v) => this.handleChange(v)}
                               value={this.state.text}
                               extra={<span type={'primary'} onClick={this.handleSubmit}>提交</span>}
                    />
                </div>
            </div>
        )
    }
}

export default Chat;