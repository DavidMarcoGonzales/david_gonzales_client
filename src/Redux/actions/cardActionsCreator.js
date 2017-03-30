import { SET_CURRENT_CARD, SET_CARD_SUCCESS } from "./actionTypes";
import axios from 'axios';


export function setCard(card) {

  return ({ type: SET_CURRENT_CARD, card: card });
}
export function setCardSuccess(card) {
  return ({ type: SET_CARD_SUCCESS, card: card });
}

export function asyncSetCard(uri) {
  return (dispatch) => {
      axios.get(`https://david-gonzales-1.herokuapp.com${uri}`)
        .then(response => {
          dispatch(setCardSuccess(response.data[0]));
        })
        .catch(error => {
          throw (error);
        });
  };
}

