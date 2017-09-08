import {Action, createFeatureSelector, createSelector} from "@ngrx/store";
import {ActionTypes, ActionWithPayload} from "./wordcard.actions";
import {Wordcard} from "./wordcard.model";

interface State {
  loading: boolean;
  wordcards: Wordcard[]
}

const initialState: State = {
  loading: false,
  wordcards: []
};

export function reducer(state: State = initialState, action: ActionWithPayload<any>) {
  switch (action.type) {
    case ActionTypes.LOAD: {
      return {
        loading:true,
        wordcards:[]
      };
    }
    case ActionTypes.LOAD_SUCCESS: {
      return {
        loading:false,
        wordcards: action.payload
      };
    }
    default: {
      console.log("unknown action type");
      console.log(action.type);
      return state;
    }
  }
}
export const wordCardsState = createFeatureSelector('wordcards');

export const getWordCards = createSelector(
  wordCardsState,
  (state: State) => state.wordcards
);
