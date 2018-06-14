import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthReducer from './reducer/AuthReducer';
import Chat from './reducer/ChatRedux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {connect, Provider} from 'react-redux';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import Login from './container/userManage/LoginContainer';
import Registration from './container/userManage/RegistrationContainer';
import DashBoard from "./container/DashBoard/DashBoardContainer";
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css'

const createStoreWidthMiddleware = applyMiddleware(thunk)(createStore);

const appReducer = combineReducers({AuthReducer, Chat});
const store = createStoreWidthMiddleware(appReducer);

function Index() {

    return (<Provider store={store}>
            <Router>
                <div>

                    <Switch>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/registration'} component={Registration}/>
                        <DashBoard></DashBoard>
                    </Switch>
                </div>

            </Router>
        </Provider>
    )
}


ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
