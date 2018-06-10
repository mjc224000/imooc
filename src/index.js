import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthReducer from './reducer/AuthReducer';
import chatReducer from './reducer/ChatRedux';
import {createStore, applyMiddleware,combineReducers} from 'redux';
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

 const appReducer= combineReducers({AuthReducer, chatReducer});
 var obj={AuthReducer,chatReducer}

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
