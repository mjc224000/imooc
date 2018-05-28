import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthReducer from './component/reducer/auth';
import AuthContainer from './component/AuthContainer'
import {createStore,applyMiddleware} from 'redux';
import {connect, Provider} from 'react-redux';
import {BrowserRouter as Router,Redirect} from 'react-router-dom';
import Login from './component/userManage/Login';
import registerServiceWorker from './registerServiceWorker';

console.log(Redirect);
let    DashBorder = (props) => {
    var isAuth = props.isAuth
    return isAuth ? (<div>
            <AuthContainer/>
            <App/>
        </div>) :<Login/>
};
const createStoreWidthMiddleware=applyMiddleware
const store = createStore(AuthReducer);
const mapStateToProps = (state) => ({isAuth: state.auth}),
       mapDispatchToProps = (dispatch) => ({AuthHandle: () => dispatch({type: 'LOGIN'})});
       DashBorder = connect(mapStateToProps, mapDispatchToProps)(DashBorder);

function Index() {

    return (<Provider store={store}>
        <Router>
            <DashBorder/>
        </Router>

    </Provider>)
}


ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
