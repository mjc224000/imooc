import React, {Component} from 'react';
import { InputItem, List, WhiteSpace, TextareaItem, WingBlank, Button, Modal, Grid} from 'antd-mobile';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
let avatarList = [];
export function _avartars() {
    if(!avatarList.length){
        for (var i = 1; i < 5; i++) {
            avatarList.push('avatars-material-man-' + i + '.png');
            avatarList.push('avatars-material-woman-' + i + '.png');
        }
        avatarList = avatarList.map((v) => {
            return {icon: require('./../img/' + v)}
        })
    }
    return avatarList;
}

export default class Boss extends Component {
    static propTypes = {
        onUpdate: propTypes.func,
        onValueChange: propTypes.func,
        userInfo: propTypes.object,
    }

    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleAvatarClick = this.handleAvatarClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
        const {username, salary, company, position, positionDesc, avatar} = this.props.userInfo;
        return (<div>
            <List>
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
                <WingBlank>
                    <div className={'user-avatar'}>
                        <div className='user-avatar-user'>
                            <div className='username'><span> {username}</span></div>
                            <div className='info'><Link to={'/companyInfo'}> <span>company info </span></Link></div>
                        </div>
                        <div className='user-avatar-avatar' onClick={this.handleAvatarClick}><img
                            src={avatar}/></div>
                    </div>
                </WingBlank>
                <WingBlank> <InputItem value={position}
                                       onChange={(value) => this.handleValueChange('position', value)}>职位招聘：</InputItem></WingBlank>
                <WingBlank> <InputItem value={company}
                                       onChange={(value) => this.handleValueChange('company', value)}>公司名称：</InputItem></WingBlank>
                <WingBlank> <InputItem value={salary}
                                       onChange={(value) => this.handleValueChange('salary', value)}>职位薪资：</InputItem></WingBlank>
                <WhiteSpace/>
                <WingBlank><TextareaItem
                    value={positionDesc}
                    title={'职位描述：'}
                    autoHeight
                    row={3} onChange={(value) => this.handleValueChange('positionDesc', value)}/> </WingBlank>
                <WingBlank> <Button onClick={this.handleSubmit} type={'primary'}>提交</Button></WingBlank>
            </List>
        </div>)
    }
}