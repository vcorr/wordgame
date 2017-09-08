import {Component, Input} from "@angular/core";
import {Wordcard} from "../model/wordcard.model";

@Component({
  moduleId: '' + module.id,
  selector: 'wordcard-listitem',
  templateUrl: 'wordcard-listitem-component.html',
})

export class WordcardComponent {
  @Input() wordcard: Wordcard;

  constructor() {
  }

}

