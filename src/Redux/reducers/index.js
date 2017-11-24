/**
 * Created by David on 11/8/2016.
 */
import {combineReducers} from "redux";
import card from "../../React-Redux/Card/cardReducer";

// Test Test Test (Start) Test Test Test
import courses from "../../React-Redux/React-Redux-Test/courseReducer";
// Test Test Test ( End ) Test Test Test

const rootReducer = combineReducers({
  // Test Test Test (Start) Test Test Test
  courses: courses,
  // Test Test Test ( End ) Test Test Test

  card: card
});

export default rootReducer;
