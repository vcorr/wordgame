import {Action} from "@ngrx/store";
import {ActionTypes} from "./wordcard.actions";
import {Wordcard} from "./wordcard.model";

interface State {
  loading: boolean;
  wordcards: Wordcard[]
}

const initialState: State = {
  loading: false,
  wordcards: []
};

export function reducer(state: State = initialState, action: Action) {
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
      return state;
    }
  }
}
