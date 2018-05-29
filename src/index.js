import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthReducer from './reducer/AuthReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {connect, Provider} from 'react-redux';
import {BrowserRouter as Router, Redirect, Route,Link} from 'react-router-dom';
import Auth from './Router/Router';
import Login from './container/userManage/LoginContainer';
import Registration from './container/userManage/RegistrationContainer';
import BossContainer from './container/BossContainer/BossContainer'
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css'
const createStoreWidthMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWidthMiddleware(AuthReducer);

function Index() {

    return (<Provider store={store}>
            <Router>
                <div>
                    <Link to={'/login'}>login</Link>
                    <Link to={'/registration'}>registration</Link>
                    <Link to={'/boss' }>boss</Link>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/registration'} component={Registration}/>
                   <Route path={'/boss'} component={BossContainer}/>
                    <Auth/>
                </div>

            </Router>
        </Provider>
    )
}


ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
