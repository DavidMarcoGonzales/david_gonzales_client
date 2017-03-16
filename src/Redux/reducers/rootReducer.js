/**
 * Created by David on 11/8/2016.
 */
import {combineReducers} from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import card from "./card"

const rootReducer = combineReducers({
  courses,
  authors,
  card
});

export default rootReducer;
