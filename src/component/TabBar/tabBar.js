import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './iconfont.css'
import './tabBar.css';

var dataList = [{
    text: 'nmsl',
    className: 'iconfont icon-yonghuzhongxin',
    path: '/geniusinfo'
}]

class TabBar extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        navList: PropTypes.array.isRequired

    }

    constructor(props) {
        super(props)
        this.handlePress = this.handlePress.bind(this);
        this.state = {selectedIndex: null}
    }

    handlePress(path, index) {
        this.props.onPress(path);
        this.setState({selectedIndex: index});
    }

    render() {
        const navList = this.props.navList;
        const selectedIndex = this.state.selectedIndex;
        return (
            <ul className={'tab-bar-footer'}>

                {navList.map((v, i) => {
                    let selected = selectedIndex === i ? ' selected' : '';
                    return v.deTabBar?null:(
                        <li key={v.path}  className={selected} onTouchStart={() => this.handlePress(v.path)} onClick={() => this.handlePress(v.path, i)}>
                            <i className={v.className}></i>
                            <span>{v.title}</span>
                        </li>)
                })}
            </ul>
        )
    }
}

export default TabBar
