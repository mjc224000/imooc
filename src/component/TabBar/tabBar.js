import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './iconfont.css'
import './tabBar.css';
var dataList=[{
    text:'nmsl',
    className:'iconfont icon-yonghuzhongxin',
    path:'/geniusinfo'
}]
class TabBar extends Component {
    static propTypes = {
        onPress:PropTypes.func.isRequired,
        navList:PropTypes.array.isRequired

    }
    constructor(props){
        super(props)
        this.handlePress=this.handlePress.bind(this);
    }

  handlePress(path){
        this.props.onPress(path);
  }

    render() {
       const navList=this.props.navList;
        console.log(navList);
        return (
            <ul className={'tab-bar-footer'}>

                {navList.map(v=>{
                   return (<li onTouchStart={()=>this.handlePress(v.path)} onClick={()=>this.handlePress(v.path)}>
                        <i className={v.className}></i>
                        <span>{v.title}</span>
                    </li>)
                })}
                </ul>
        )
    }
}
export default TabBar
