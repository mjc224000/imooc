import React, {Component} from 'react';
import {Card, List, WingBlank} from 'antd-mobile';
import './BossList.css'
export default class GeniusList extends Component {
    static defaultProps ={
        bossList:[]
    }
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(val) {
        this.props.history.push('/chat/' + val);
    }

    render() {
        const bossList = this.props.bossList;
        return (
            <div>
                {
                    bossList.map(v => {
                        return v.avatar ? (<List key={v.username}>
                            <WingBlank>
                                <Card onClick={()=>this.handleClick(v._id)}>
                                    <Card.Header
                                        title={<div style={{display:'flex',flexFlow:'column'} }>
                                            <span style={{color:'silver'}}>{v.username}</span>
                                            <span>{v.position}</span> </div> }
                                        thumb={v.avatar}
                                        extra={<span>{v.salary}</span>}
                                    />
                                    <Card.Body>
                                        <div>{v.company}</div>
                                        {v.desc}
                                    </Card.Body>
                                </Card>
                            </WingBlank>
                        </List>) : null
                    })}
            </div>
        )
    }
}
