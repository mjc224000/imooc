import React, {Component} from 'react';
import {List, InputItem, WhiteSpace, Button, Toast, WingBlank, Radio} from 'antd-mobile';
import {Link} from 'react-router-dom';
import { createForm, formShape } from 'rc-form';
import propTypes from 'prop-types';
import imgURL from './../img/logo.png';
///http://react-component.github.io/form/examples/server-validate.html
const RadioItem = Radio.RadioItem;
export  class Registration extends Component {
   static propTypes={form:formShape}
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            'username': '',
            'phone': '',
            password: '',
            confirmPassword: '',
            type:'genius'
        }

        this.handleValueChange=this.handleValueChange.bind(this);
    }

   submit=()=>{
       this.props.form.validateFields((error,value)=>{
        setTimeout(()=>{
            if(value.user==='yiminghe'){
                this.props.form.setFields({
                    user:{value:values.user,
                    errors:[new Error('forbid ha')]}
                })
            }
        })
       })
   }
    handleValueChange(key,value){

        this.setState({[key]:value});
    }
    render() {
        const {type}=this.state
      const {getFieldProps,getFieldError}=this.props.form;
        const usernameError=getFieldError('username');
        console.log(usernameError);
        return (<List>
            <WingBlank>
                <div style={{textAlign: 'center'}}><img className='logo' src={imgURL}/></div>
            </WingBlank>
            <WingBlank> <InputItem {...getFieldProps('username',{
                onChange(){(value)=>this.handleValueChange('username',value)},
                rules:[{required:true,
                message:'用户名必填',
                }]
            })}>用户名：</InputItem></WingBlank>
            <p className='validate'> {usernameError?usernameError:null}</p>
            <WhiteSpace/>
            <WhiteSpace/>
            <WingBlank> <InputItem onChange={(value)=>this.handleValueChange('password',value)}>密码： </InputItem></WingBlank>
            <WhiteSpace/>
            <WingBlank> <InputItem onChange={(value)=>this.handleValueChange('password',value)}>确认密码：</InputItem></WingBlank>
            <WingBlank> <RadioItem key={0} checked={type==='genius'} onChange={(value) => this.handleValueChange('type','genius')}>
                Genius
            </RadioItem> </WingBlank>
            <WingBlank><RadioItem key={1} checked={type==='StreetGirl'} onChange={(value)=>this.handleValueChange('type','StreetGirl') }> Street Girl</RadioItem> </WingBlank>
            <WingBlank> <Button type={'primary'}><Link to={'/login'}>Login</Link></Button></WingBlank>
            <WhiteSpace/>
            <WingBlank> <Button type={'primary'}>Register</Button></WingBlank>
        </List>)
    }
}
export default  createForm()(Registration);