import React, {Component} from 'react';
import axios from 'axios';
import './infoCenter.css';
import {Result, WhiteSpace, List,WingBlank,Button} from 'antd-mobile';

export default class InfoCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: '',
            resume: '',
            username: '',
            position: '',
            salary: '',
            positionDesc:''
        }
        this.handleLogout=this.handleLogout.bind(this);
    }
    handleLogout(){

        this.props.onLogout();
    }

    componentDidMount() {
    }
    render() {
        const Item = List.Item,
            Brief = Item.Brief;
        const {type,positionDesc,salary,avatar,username,company}=this.props;
    var desc=positionDesc.split('\n');
    const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt=""/>;
        return (<div className="info-center">
            <Result
                img={myImg(avatar)  }
                title={username}
                message={<div>{company}</div>}
            />
            <List renderHeader={() =>type==="boss"? '职位描述':'个人简介'}>
                {type==='boss'?<Item>{`职位薪资: ${salary}`} </Item>:null }
                <Item>
                    {desc.map((v,i)=><Brief key={i}>{v}</Brief> )}
                </Item>
            </List>
            <WhiteSpace/>
            <WingBlank><Button type={'primary'} onClick={this.handleLogout}>Logout</Button></WingBlank>
        </div>);

    }
}
