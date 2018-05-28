import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthReducer from './component/reducer/auth';
import AuthContainer from './component/AuthContainer'
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(AuthReducer);

function Index() {
    var DashBorder = (props) => {
          var isAuth=props.isAuth

        return isAuth?(<div>
            <AuthContainer/>
            <App/>
        </div>):(<button onClick={props.AuthHandle}>login</button>)
    };
    DashBorder = connect(function (state) {
        return {isAuth: state.auth}
    }, (dispatch) => {
        return {AuthHandle:()=>dispatch({type:'LOGIN'})}
    })(DashBorder)
    return (<Provider store={store}>
        <Router>
            <DashBorder/>
        </Router>

    </Provider>)
}


ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
