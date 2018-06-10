import React, {Component} from 'react';
import {Card, List, WhiteSpace, WingBlank,TextareaItem} from 'antd-mobile';

export default class GeniusList extends Component {
    render() {
        const bossList = this.props.bossList;
        return (
            <div>
                {
                    bossList.map(v=>{return (<List key={v.username}>
                        <WingBlank>
                            <Card>
                                <Card.Header
                                title={v.position}
                                thumb={v.avatar}
                                extra={<span>v.salary</span>}
                                />
                                <Card.Body>
                                    <div>v.company</div>
                                    {v.desc}
                                </Card.Body>
                            </Card>
                        </WingBlank>
                    </List>)})}
                    </div>
        )
    }
}
