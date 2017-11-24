/**
 * Created by David on 11/8/2016.
 */
import {combineReducers} from "redux";
import courses from "../../React-Redux/React-Redux-Test/courseReducer"
import card from "../../React-Redux/Card/cardReducer";

const rootReducer = combineReducers({
  courses: courses,
  card: card
});

export default rootReducer;
