import { Component, OnInit } from '@angular/core';
import {WordcardService} from "./wordcard.service";
import {Observable} from "rxjs";
import {Wordcard} from "./wordcard.model";

@Component({
  moduleId: ''+module.id,
  selector: 'wordcardlist',
  templateUrl: 'wordcard-list.component.html',
  styleUrls: ['wordcard-list.component.css']
})
export class WordCardListComponent implements OnInit {

  cards:Observable<Wordcard[]>;
  constructor(private wordcardService:WordcardService) { }

  ngOnInit() {
    this.cards = this.wordcardService.getCards();

  }

}
