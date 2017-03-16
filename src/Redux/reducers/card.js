import {SET_CURRENT_CARD} from "../actions/actionTypes";
import initialState from './initialState';

export default function card(state = initialState.card, action = {}) {
  switch (action.type) {
    case SET_CURRENT_CARD:{
       return action.card;
    }
    default:
      return state;
  }
}
