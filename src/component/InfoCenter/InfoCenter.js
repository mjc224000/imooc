import React,{Component} from 'react';
import axios from 'axios'
import { Result, Icon, WhiteSpace ,List} from 'antd-mobile';

export default class InfoCenter extends Component{
    constructor(props){
        super(props);
        this.state={myIndex:0}
    }
    handleKeyDown(){
        const {myIndex}=this.state;
        this.setState({myIndex:myIndex+1});
    }
    componentDidMount(){
        axios.get('/info/userInfo').then(res=>{
            this.setState({...res.data.data})
        })
    }
    render(){
const Item=List.Item,
       Brief=Item.Brief
        console.log(this.state);
        const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
      return(<div className="result-example">
          <div className="sub-title">支付成功</div>
          <Result
              img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
              title="支付成功"
              message={<div>998.00元 <del>1098元</del></div>}
          />
          <List renderHeader={()=>'简介'}>
              <Item>

              </Item>
          </List>
          <WhiteSpace />

      </div>);

    }
}
