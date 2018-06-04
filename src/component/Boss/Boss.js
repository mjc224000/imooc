import React, {Component} from 'react';
import {Icon, InputItem, List, NavBar, WhiteSpace,TextareaItem,WingBlank,Button,Modal,Grid} from 'antd-mobile';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import imgurl from  "./../img/logo.png"
export default class Boss extends Component {
    static propTypes={
        update:propTypes.func
    }
    constructor(props) {
        super(props)
        this.state = {
            company: null,
            position: null,
            positionDesc: null,
            salary: 0,
            showModal:true,
            avatar:''
        }
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleAvatarClick=this.handleAvatarClick.bind(this);
        this.handleModalTouch=this.handleModalTouch.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleValueChange(key, value) {
        this.setState({[key]: value});
    }
    handleModalTouch(e){
       this.setState({avatar:e.icon})
    }
    handleAvatarClick(){
        this.setState({showModal:true })
    }
     handleSubmit(){
 const{company,position,positionDesc,salary,avatar}=this.state;
     this.props.update({company,position,positionDesc,salary,avatar});
     }
     _avartars(){
        let avatarList=[];
        if(this.props.avatars){
            avatarList=this.props.avatars
        }else{
            for(var i=1;i<5;i++){
                avatarList.push('avatars-material-man-'+i+'.png');
                avatarList.push('avatars-material-woman-'+i+'.png');
            }
            avatarList=avatarList.map((v)=> {
                return{icon:require('./../img/'+v) }
            })
        }
        return avatarList;
     }
    render() {
        return (<div>
            <NavBar leftContent={<Icon type={'left'} onClick={() => this.props.history.go(-1)}/>}>
                Complete information
            </NavBar>
            <List>
                <WingBlank><Modal visible={this.state.showModal}
                    transparent
                                  wrapProps={{ onTouchStart: ()=>this.setState({'showModal':false})}}>
            <Grid data={this._avartars()}
                  columnNum={3}
                 onClick={this.handleModalTouch}
                  renderItem={dataItem => (
                      <div style={{border:'1px solid sliver'}}>
                          <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                          <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                              <span>I am title..</span>
                          </div>
                      </div>
                  )}
            />
                </Modal> </WingBlank>
                <WingBlank ><div className={'user-avatar'}>
                    <div className='user-avatar-user' >
                     <div className='username'>  <span> imooc</span> </div>
                        <div className='info'><Link to={'/companyInfo'}>  <span>company info </span></Link></div>
                    </div>
                    <div className='user-avatar-avatar' onClick={this.handleAvatarClick} > <img src={this._avartars()[0].icon}/></div>
                </div></WingBlank>
                <WingBlank> <InputItem
                    onChange={(value) => this.handleValueChange('position', value)}>职位招聘：</InputItem></WingBlank>
                <WingBlank> <InputItem
                    onChange={(value) => this.handleValueChange('company', value)}>公司名称：</InputItem></WingBlank>
                <WingBlank> <InputItem
                    onChange={(value) => this.handleValueChange('salary', value)}>职位薪资：</InputItem></WingBlank>
                <WhiteSpace/>
                <WingBlank><TextareaItem title={'职位描述：'}
                                         autoHeight
                                         row={3} onChange={(value)=>this.handleValueChange('positionDesc',value)}/> </WingBlank>
                <WingBlank> <Button onClick={this.handleSubmit} type={'primary'}>提交</Button></WingBlank>
            </List>
        </div>)
    }
}