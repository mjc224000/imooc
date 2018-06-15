import React, {Component} from 'react';
import {Card, List,WhiteSpace} from 'antd-mobile';
import PropTypes from 'prop-types';

export default class MessageList extends Component {
    static propTypes = {
        msgGroup: PropTypes.arrary
    }

    constructor(props) {
        super(props);
    }

    render() {
        const ListItem = List.Item;

        return (
            <div>
                <List>
                    {this.props.msgGroup.map((v) => {
                        return (
                            <ListItem>
                                <Card>
                                    <Card.Header title={v.title}/>
                                    <Card.Body> {v.content}</Card.Body>
                                    <Card.Footer content={v.unread}/>
                                </Card>
                                <WhiteSpace/>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        )
    }
}