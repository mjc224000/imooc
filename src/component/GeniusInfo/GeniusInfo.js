import React, {Component} from 'react';
import {Button, Grid, InputItem, List, Modal, TextareaItem, WhiteSpace, WingBlank} from 'antd-mobile';
import {_avartars} from './../Boss/BossInfo';
import propTypes from 'prop-types';

export default class GeniusInfo extends Component {
    static propTypes = {
        onUpdate: propTypes.func,
        onValueChange: propTypes.func,
        userInfo: propTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.handleAvatarClick = this.handleAvatarClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(key, value) {
        this.props.onValueChange({key, value})
    }

    handleAvatarClick() {
        this.setState({showModal: true})
    }

    handleSubmit() {
        this.props.onUpdate();
    }

    render() {
        const {resume, username, avatar, salary, position} = this.props.userInfo;
        return (<div>
            <List>

                <WingBlank>
                    <div className={'user-avatar'}>
                        <div className='user-avatar-user'>
                            <div className='username'><span> {username}</span></div>
                        </div>
                        <div className='user-avatar-avatar' onClick={this.handleAvatarClick}><img
                            src={avatar}/></div>
                    </div>
                </WingBlank>
                <WingBlank> <InputItem value={position}
                                       onChange={(value) => this.handleValueChange('position', value)}>应聘职位：</InputItem></WingBlank>
                <WingBlank> <InputItem value={salary}
                                       onChange={(value) => this.handleValueChange('salary', value)}>薪资要求：</InputItem></WingBlank>
                <WhiteSpace/>
                <WingBlank>
                    <div style={{position: 'relative', overflow: 'auto', maxHeight: '50%'}}>
                        <TextareaItem
                            value={resume}
                            title={'职位描述：'}
                            count={140}
                            rows={7} onChange={(value) => this.handleValueChange('resume', value)}/>
                    </div>
                </WingBlank>
                <WingBlank> <Button onClick={this.handleSubmit} type={'primary'}>提交</Button></WingBlank>
                <WingBlank><Modal visible={this.state.showModal}
                                  transparent
                                  wrapProps={{onTouchStart: () => this.setState({'showModal': false})}}>
                    <Grid data={_avartars()}
                          columnNum={3}
                          onClick={(el) => this.handleValueChange('avatar', el.icon)}
                          renderItem={dataItem => (
                              <div style={{border: '1px solid sliver'}}>
                                  <img src={dataItem.icon} style={{width: '75px', height: '75px'}} alt=""/>
                                  <div style={{color: '#888', fontSize: '14px', marginTop: '12px'}}>
                                      <span>I am title..</span>
                                  </div>
                              </div>
                          )}
                    />
                </Modal> </WingBlank>
            </List>
        </div>)
    }
}