import React, {Component} from 'react';
import {InputItem, List} from 'antd-mobile';
import './chat.css';
import {logout} from "../../reducer/AuthReducer";
class Chat extends Component {
    static defaultProps = {
        chatmsg: []
    }

    constructor(props) {
        super(props);
        this.state = {text: ''}
        this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

        const {_id} = this.props
        this.props.sendMsg({
            from: _id,
            to: this.props.location.query.id,
            msg: this.state.text
        })
        this.setState({text: ''})
    }
    handleChange(v) {
        this.setState({text: v})
    }
    render() {
        const Item = List.Item
        console.log(this.props.chatmsg);
        return (
            <div className='chat'>
                <div className='chat-list'>
                    <List>
                        {this.props.chatmsg.map(v => {
                            return v.from === this.props._id ?
                                <Item extra={<img src={this.props.avatar} alt=""/>}>{v.content}</Item> :
                                <Item thumb={<img src={this.props.location.query.avatar}/>   }>{v.content}</Item>
                        })}
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