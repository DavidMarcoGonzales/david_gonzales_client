import { SET_CURRENT_CARD, SET_CARD_SUCCESS } from "./actionTypes";
import axios from 'axios';



export function setCard(uri) {
  return ({ type: SET_CURRENT_CARD, card: uri });
}
export function setCardSuccess(uri) {
  return ({ type: SET_CARD_SUCCESS, card: uri });
}

export function asyncSetCard(uri) {
  console.log('cardActionCreator line 14')
  return function (dispatch) {


      // return axios.get(uri)
      return axios.get(`https://david-gonzales-1.herokuapp.com${uri}`)
      .then(function (response) {
        dispatch(setCardSuccess(response.data[0]));
      })
      .catch(error => {
        throw (error);
      });
  }
}