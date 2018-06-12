import React, {Component} from 'react';
import {Card, List, WingBlank} from 'antd-mobile';
import './BossList.css'

export default class GeniusList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(val) {
      var path={
          pathname:'/chat',
          query:val
      }
        this.props.history.push(path);
    }

    render() {
        const userList = this.props.userList;
        const isGeniusList = this.props.type === 'boss';
        const Item = List.Item;
        const Brief = Item.Brief;
        return (
            <div>
                {
                    userList.map(v => {
                        return v.avatar ? (<List key={v.username}>
                            <WingBlank>
                                <Card onClick={() => this.handleClick({
                                    id: v._id,
                                    avatar: v.avatar
                                })}>
                                    <Card.Header
                                        title={<div style={{display: 'flex', flexFlow: 'column'}}>
                                            <Brief>{v.username}</Brief>
                                            <span>{v.position}</span>
                                        </div>}
                                        thumb={v.avatar}
                                        extra={<span>{v.salary}</span>}
                                    />
                                    <Card.Body>
                                        <div>{isGeniusList ? '最近所在公司' : '' + v.company}</div>
                                        {isGeniusList ? v.resume : v.positionDesc}
                                    </Card.Body>
                                </Card>
                            </WingBlank>
                        </List>) : null
                    })}
            </div>
        )
    }
}
