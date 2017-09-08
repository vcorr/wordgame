import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {ActionTypes, ActionWithPayload, loadWordcardsSuccess} from "./wordcard.actions";
import {WordcardService} from "./wordcard.service";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";


@Injectable()
export class WordcardEffects {

  constructor(private actions$: Actions,
              private wordcardService: WordcardService) {
  }

  @Effect()
  loadWordcards$: Observable<ActionWithPayload<any>> = this.actions$
    .ofType(ActionTypes.LOAD)
    .switchMap(() => this.wordcardService.getCards())
    .map(cards => loadWordcardsSuccess(cards));
}
