import { Component, OnInit } from '@angular/core';
import {WordcardService} from "./wordcard.service";
import {Observable} from "rxjs";
import {Wordcard} from "./wordcard.model";
import {Store} from "@ngrx/store";
import {loadWordCards} from "./wordcard.actions";

@Component({
  moduleId: ''+module.id,
  selector: 'wordcardlist',
  templateUrl: 'wordcard-list.component.html',
  styleUrls: ['wordcard-list.component.css']
})
export class WordCardListComponent implements OnInit {

  cards:Observable<Wordcard[]>;
  constructor(private store: Store<{}>) {
    store.dispatch(loadWordCards());

    this.cards = store.select('wordcards')
      .map((state:any)=> state.wordcards);
  }

  ngOnInit() {

  }

}
