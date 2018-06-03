import React, {Component} from 'react';
import {Icon, InputItem, List, NavBar, WhiteSpace,TextareaItem,WingBlank,Button,Modal,Grid} from 'antd-mobile';
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
     _avatars(){
        let ImgList=[];
         if (this.props.avatars) {
             ImgList=this.props.avatars;
         }else {
             for(var i=1;i<=5;i++){
                 ImgList.push('avatars-material-man-'+i+'.png');
                 ImgList.push('avatars-material-woman-'+i+'.png');
             }
           ImgList=ImgList.map(v=>{
               return {icon:require('./../img/'+v)}
           });
         }
       return ImgList
     }
    render() {
            const ListItem=List.Item;
            this._avatars();
        return (<div>
            <NavBar leftContent={<Icon type={'left'} onClick={() => this.props.history.go(-1)}/>}>
                Complete information
            </NavBar>
            <List>
                <WingBlank><Modal visible={this.state.showModal}
                    transparent
                                  wrapProps={{ onTouchStart: ()=>this.setState({'showModal':false})}}>
                   <Grid data={this._avatars()}
                   columnNum={3}
                         renderItem={dataItem => (
                             <div style={{border:"1px solid sliver"}}>
                                 <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                                 <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                     <span>I am title..</span>
                                 </div>
                             </div>
                         )}
                   />
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