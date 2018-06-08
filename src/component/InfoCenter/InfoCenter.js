import React, {Component} from 'react';
import axios from 'axios';
import './infoCenter.css';
import {Result, Icon, WhiteSpace, List} from 'antd-mobile';


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
    }

    handleKeyDown() {
        const {myIndex} = this.state;
        this.setState({});
    }

    componentDidMount() {
        axios.get('/info/userInfo',{params:{
            _id:this.props._id
            }}).then(res => {
            this.setState({...res.data.data})
        })
    }
    render() {
        const Item = List.Item,
            Brief = Item.Brief;

    const {type,positionDesc,salary}=this.state;
    var desc=positionDesc.split('\n');

    const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt=""/>;
        return (<div className="info-center">
            <Result
                img={myImg(this.state.avatar)  }
                title={this.state.username}
                message={<div>{this.state.company}</div>}
            />
            <List renderHeader={() =>this.props.type==="boss"? '职位描述':'个人简介'}>
                {type==='boss'?<Item>{`职位薪资: ${salary}`} </Item>:null }
                <Item>
                    {desc.map(v=><Brief>{v}</Brief> )}
                </Item>
            </List>
            <WhiteSpace/>

        </div>);

    }
}
