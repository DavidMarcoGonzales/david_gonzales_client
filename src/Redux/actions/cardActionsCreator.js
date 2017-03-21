import { SET_CURRENT_CARD, SET_CARD_SUCCESS } from "./actionTypes";
import axios from 'axios';



export function setCard(uri) {
  return ({ type: SET_CURRENT_CARD, card: { uri } });
}
export function setCardSuccess(uri) {
  return ({ type: SET_CARD_SUCCESS, card: { uri } });
}

export function asyncSetCard(uri) {
  return function (dispatch) {

    //Dev   
    return axios.get(uri)
      //Prod
      // return axios.get(`https://david-gonzales-1.herokuapp.com/api${uri}`)
      .then(function (response) {
        dispatch(setCardSuccess(uri));
      })
      .catch(error => {
        throw (error);
      });
  }
}