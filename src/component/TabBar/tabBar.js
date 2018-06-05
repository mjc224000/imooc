import React, {Component} from 'react';
import propTypes from 'prop-types';
import './tabBar.css';

class TabBar extends Component {
    static propTypes = {
        navList: propTypes.array
    }

    Icon() {
        return
    }

    render() {

        return (
            <ul className={'tab-bar-footer'}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        )
    }
}
