import BossList from './../../component/BossList/BossList';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import React, {Component} from 'react';
import {_axios} from "../../reducer/util";

class BossListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {bossList: []};
    }

    componentDidMount() {
        _axios.get('/info/List', {
            params: {
                type: 'boss'
            }
        }).then((res) => {
            if (res.status === 200 && res.data.code === 0) {
                this.setState({bossList: res.data.data})
            }
        })
    }

    render() {
        return <BossList {...this.props} bossList={this.state.bossList}/>
    }
}

const mapStateToProps = ({AuthReducer: state}) => {
    return {...state};
};

export default  withRouter( connect(mapStateToProps)(BossListContainer) );