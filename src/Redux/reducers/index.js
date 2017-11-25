/**
 * Created by David on 11/8/2016.
 */
import {combineReducers} from "redux";
import card from "../../React-Redux/Card/cardReducer";

import courses from "../../React-Redux/New-Component/courseReducer";

const rootReducer = combineReducers({
  courses: courses,
  card: card
});

export default rootReducer;
