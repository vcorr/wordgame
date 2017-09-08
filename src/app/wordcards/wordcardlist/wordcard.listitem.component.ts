import {Component, Input} from "@angular/core";
import {Wordcard} from "../model/wordcard.model";

@Component({
  moduleId: '' + module.id,
  selector: 'wordcard-listitem',
  templateUrl: 'wordcard-listitem-component.html',
})

export class WordcardListItemComponent {
  @Input() wordcard: Wordcard;

  constructor() {
  }

  solve() {
    console.log("solve clicked");
  }
}

