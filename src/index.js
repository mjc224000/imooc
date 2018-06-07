import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthReducer from './reducer/AuthReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {connect, Provider} from 'react-redux';
import {BrowserRouter as Router, Redirect, Route,Link,Switch} from 'react-router-dom';
import Login from './container/userManage/LoginContainer';
import Registration from './container/userManage/RegistrationContainer';
import DashBoard from "./container/DashBoard/DashBoardContainer";
import MyToast from './component/MyToast/MyToast';
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css'

const createStoreWidthMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWidthMiddleware(AuthReducer);

function Index() {

    return (<Provider store={store}>
            <Router>
                <div>
                    <MyToast/>
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
