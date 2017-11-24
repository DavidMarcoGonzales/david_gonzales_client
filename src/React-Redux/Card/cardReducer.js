import { SET_CURRENT_CARD, SET_CARD_SUCCESS } from "./actionTypes";
import initialState from './initialState';

export default function card(state = initialState.card, action = {}) {
  switch (action.type) {
    case SET_CURRENT_CARD: {
      state = action.card;
      break;
    }
    case SET_CARD_SUCCESS: {
      state = action.card;
      break;
    }
    default: {
      break;
    }
  }
  return state;
}
