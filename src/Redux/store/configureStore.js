/**
 * Created by David on 11/8/2016.
 */
import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers"; // /index
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

