import React,{Component} from 'react';
import {WingBlank,Card,WhiteSpace,List} from 'antd-mobile';
export default class GeniusList extends Component{
render(){
    return(
        <List>
            <List.Item>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="This is title"
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra={<span>this is extra</span>}
                        />
                        <Card.Body>
                            <div>This is content of `Card`</div>
                        </Card.Body>
                        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </List.Item>
            <List.Item>
                <List.Item>
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                title="This is title"
                                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                extra={<span>this is extra</span>}
                            />
                            <Card.Body>
                                <div>This is content of `Card`</div>
                            </Card.Body>
                            <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                        </Card>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                </List.Item>
            </List.Item>
        </List>
    )
}
}