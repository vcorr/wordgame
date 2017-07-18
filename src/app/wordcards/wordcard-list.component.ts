import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Wordcard} from "./wordcard.model";
import {Store} from "@ngrx/store";
import {loadWordCards} from "./wordcard.actions";
import {Meta, Title} from '@angular/platform-browser';

@Component({
  moduleId: '' + module.id,
  selector: 'wordcardlist',
  templateUrl: 'wordcard-list.component.html'
})
export class WordCardListComponent implements OnInit {

  cards: Observable<Wordcard[]>;

  constructor(private store: Store<{}>, meta:Meta, title:Title) {
    title.setTitle('My Fancy Wordgame');
    meta.addTags([
      {name: 'author', content: 'Vasco Correia'},
      {name: 'keywords', content: 'learning, writing, kids, preschoolers'},
      {name: 'description', content: 'A Word game for kids'}
    ]);
  };

  ngOnInit() {
    this.store.dispatch(loadWordCards());
    this.cards = this.store.select('wordcards')
      .map((state: any) => state.wordcards);
  }

}
