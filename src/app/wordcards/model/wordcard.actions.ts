import {Action} from "@ngrx/store";
export const ActionTypes = {
  LOAD: 'Load Wordcards',
  LOAD_SUCCESS: 'LOAD_WORDCARDS_SUCCESS'
};

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export function loadWordCards(): ActionWithPayload<any> {
  return {
    type: ActionTypes.LOAD,
    payload: {}
  }
}
export function loadWordcardsSuccess(cards): ActionWithPayload<any> {
  return {
    type: ActionTypes.LOAD_SUCCESS,
    payload: cards
  };
}
