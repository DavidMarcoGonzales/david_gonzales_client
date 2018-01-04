/**
 * Created by David on 11/8/2016.
 */
import {combineReducers} from "redux";
import card from "./cardReducer";
import authors from '../../React-Redux/New-Component/Redux/reducers/authorReducer';
import courses from "../../React-Redux/New-Component/Redux/reducers/courseReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  card: card
});

export default rootReducer;
