import { SET_CURRENT_CARD, SET_CARD_SUCCESS } from "../actions/actionTypes";
import initialState from './initialState';

export default function card(state = initialState.card, action = {}) {
  switch (action.type) {
    case SET_CURRENT_CARD: {
      return action.card;
    }
    case SET_CARD_SUCCESS: {
      return action.card;
    }
    default:
      return state;
  }
}
