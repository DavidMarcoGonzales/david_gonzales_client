import 'babel-polyfill';

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";

import configureStore from "./Redux/store/configureStore";

import { getJWT } from "./Redux/store/localStorage";


/* CSS */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

/* React-Redux */
import Login from "./React-Redux/Login/Login.jsx";
import TCIApp from './React-Redux/TCIApp/TCIApp.jsx';


const store = configureStore();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getJWT() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)
ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter >
        <div>
          {/*<Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />*/}
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={TCIApp} />
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
