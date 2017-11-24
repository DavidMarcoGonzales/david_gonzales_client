/**
 * Created by David on 11/8/2016.
 */
import {combineReducers} from "redux";
import courses from "../../React/React-Redux-Test/courseReducer"
// import card    from "../../React/Card/cardReducer";
import card from "../../React-Redux/Card/cardReducer";

const rootReducer = combineReducers({
  courses: courses,
  card: card
});

export default rootReducer;
