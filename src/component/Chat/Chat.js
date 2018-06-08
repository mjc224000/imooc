import React, {Component} from 'react';
import {InputItem,Icon} from 'antd-mobile';
import './chat.css';

class Chat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='chat'>
                <div className="main">
                    <div className='chat-list'>

                    </div>
                   <div className='chat-footer'>
                      <InputItem className='chat-footer-input'/>
                       <div className='chat-footer-emoji'><span> </span> </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default Chat;