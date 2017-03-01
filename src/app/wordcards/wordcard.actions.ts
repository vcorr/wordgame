import {Action} from "@ngrx/store";
export const ActionTypes = {
  LOAD: 'Load Wordcards',
  LOAD_SUCCESS: 'LOAD_WORDCARDS_SUCCESS'
};


export function loadWordCards(): Action {
  return {
    type: ActionTypes.LOAD,
    payload: {}
  }
}
export function loadWordcardsSuccess(cards): Action {
  return {
    type: ActionTypes.LOAD_SUCCESS,
    payload: cards
  };
}
