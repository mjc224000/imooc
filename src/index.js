import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthReducer from './reducer/AuthReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {connect, Provider} from 'react-redux';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Auth from './Router/Router';
import registerServiceWorker from './registerServiceWorker';

const createStoreWidthMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWidthMiddleware(AuthReducer);

function Index() {

    return (<Provider store={store}>
            <Router>
                <Auth/>
            </Router>
        </Provider>
    )
}


ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
