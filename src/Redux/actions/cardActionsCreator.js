import { SET_CURRENT_CARD, SET_CARD_SUCCESS } from "./actionTypes";
import axios from 'axios';
import { getJWT } from '../store/localStorage';

export function setCard(card) {

  return ({ type: SET_CURRENT_CARD, card: card });
}
export function setCardSuccess(card) {
  return ({ type: SET_CARD_SUCCESS, card: card });
}

export function asyncSetCard(uri) {
  return (dispatch) => {
console.log( `Bearer ${getJWT()}`)
      axios.get(uri, { headers: { Authorization: `Bearer ${getJWT()}` } })  // when testing local server 3000 and when deploying no cors
//      axios.get(`https://david-gonzales-1.herokuapp.com${uri}`, { headers: { Authorization: `Bearer ${getJWT()}` } })  // when testing client against heroku server with cors
        .then(response => {
          dispatch(setCardSuccess(response.data[0]));
        })
        .catch(error => {
          throw (error);
        });
  };
}

