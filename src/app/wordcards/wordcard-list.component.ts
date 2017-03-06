import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Wordcard} from "./wordcard.model";
import {Store} from "@ngrx/store";
import {loadWordCards} from "./wordcard.actions";

@Component({
  moduleId: '' + module.id,
  selector: 'wordcardlist',
  templateUrl: 'wordcard-list.component.html'
})
export class WordCardListComponent implements OnInit {

  cards: Observable<Wordcard[]>;

  constructor(private store: Store<{}>) {
  }

  ngOnInit() {
    this.store.dispatch(loadWordCards());
    this.cards = this.store.select('wordcards')
      .map((state: any) => state.wordcards);
  }

}
