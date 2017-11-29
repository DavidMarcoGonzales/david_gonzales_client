/**
 * Created by David on 11/8/2016.
 */
import {combineReducers} from "redux";
import card from "../../React-Redux/Card/cardReducer";
import authors from '../../React-Redux/New-Component/authorReducer';
import courses from "../../React-Redux/New-Component/courseReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  card: card
});

export default rootReducer;
