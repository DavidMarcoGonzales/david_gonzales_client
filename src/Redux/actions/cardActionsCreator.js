import {SET_CURRENT_CARD } from "./actionTypes";

export function setCard (uri)  {
  return ({ type: SET_CURRENT_CARD, card: {uri}});
}