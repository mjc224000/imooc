import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthReducer from './reducer/AuthReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {connect, Provider} from 'react-redux';
import {BrowserRouter as Router, Redirect, Route,Link} from 'react-router-dom';
import Login from './container/userManage/LoginContainer';
import Registration from './container/userManage/RegistrationContainer';
import BossContainer from './container/BossContainer/BossContainer';
import DashBoard from "./container/DashBoard/DashBoardContainer";
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css'

const createStoreWidthMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWidthMiddleware(AuthReducer);
function Auth() {
    if(true){
        return <Redirect to={'/login'}/>
    }
    return      <Route path={'/boss'} component={BossContainer}/>
}
function Index() {

    return (<Provider store={store}>
            <Router>
                <div>
                    <Link to={'/login'}>login</Link>
                    <Link to={'/registration'}>registration</Link>
                    <Link to={'/boss' }>boss</Link>
                    <Redirect to={'/login'}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/registration'} component={Registration}/>
              <DashBoard></DashBoard>

                </div>

            </Router>
        </Provider>
    )
}


ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
