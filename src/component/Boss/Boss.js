import React, {Component} from 'react';
import {Icon, InputItem, List, NavBar, WhiteSpace,TextareaItem,WingBlank,Button,Modal} from 'antd-mobile';
import {Link} from 'react-router-dom'
import imgurl from  "./../img/logo.png"
export default class Boss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company: null,
            position: null,
            positionDesc: null,
            salary: 0,
            showModal:true
        }
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleValueChange(key, value) {
        this.setState({[key]: value});
    }
     handleSubmit(){
        this.props.onSubmit(this.state);
     }
    render() {
            const ListItem=List.Item;
        return (<div>
            <NavBar leftContent={<Icon type={'left'} onClick={() => this.props.history.go(-1)}/>}>
                Complete information
            </NavBar>
            <List>
                <WingBlank><Modal visible={this.state.showModal}
                    transparent
                                  wrapProps={{ onTouchStart: ()=>this.setState({'showModal':false})}}>
                    <List>
                        <ListItem>1</ListItem>
                        <ListItem>1</ListItem>
                        <ListItem>1</ListItem>
                        <ListItem>1</ListItem>
                    </List>
                </Modal> </WingBlank>
                <WingBlank> <InputItem
                    onChange={(value) => this.handleValueChange('position', value)}>职位招聘</InputItem></WingBlank>
                <WingBlank> <InputItem
                    onChange={(value) => this.handleValueChange('company', value)}>公司名称</InputItem></WingBlank>
                <WingBlank> <InputItem
                    onChange={(value) => this.handleValueChange('salary', value)}>职位薪资</InputItem></WingBlank>
                <WhiteSpace/>
                <WingBlank><TextareaItem title={'职位描述'}
                                         row={3} onChange={(value)=>this.handleValueChange('positionDesc',value)}/> </WingBlank>
                <WingBlank> <Button type={'primary'}>提交</Button></WingBlank>
            </List>
        </div>)
    }
}