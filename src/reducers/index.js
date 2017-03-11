/**
 * Created by David on 11/8/2016.
 */
import {combineReducers} from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
