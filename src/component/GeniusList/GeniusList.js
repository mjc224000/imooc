import React,{Component} from 'react';
import {WingBlank,Card,WhiteSpace,List} from 'antd-mobile';
export default class GeniusList extends Component{
render(){
    const geniusList=this.props.geniusList
    return(
        <List>
            <div>
                {
                    geniusList.map(v => {
                        return v.avatar ? (<List key={v.username}>
                            <WingBlank>
                                <Card onClick={()=>this.handleClick(v._id)}>
                                    <Card.Header
                                        title={<div style={{display:'flex',flexFlow:'column'} }>
                                            <span style={{color:'silver'}}>{v.username}</span>
                                            <span>{v.position}</span> </div> }
                                        thumb={v.avatar}
                                        extra={<span>期望薪资：{v.salary}</span>}
                                    />
                                    <Card.Body>
                                        <div>最近所在公司：{v.company}</div>
                                        {v.desc}
                                    </Card.Body>
                                </Card>
                            </WingBlank>
                        </List>) : null
                    })}
            </div>

        </List>
    )
}
}