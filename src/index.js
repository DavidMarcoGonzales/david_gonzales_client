import 'babel-polyfill';

import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./Redux/store/configureStore";
import "../css/main.css";

/* React-Redux */
import App from './React/App/App.jsx';


const store = configureStore();
import  {loadCourses} from "./React-Redux/New-Component/courseActions"
store.dispatch(loadCourses());

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter >
        <div>
          <Route path="/" component={App} />
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
