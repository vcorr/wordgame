import {Component, Input} from "@angular/core";
import {Wordcard} from "./wordcard.model";

@Component({
  moduleId: '' + module.id,
  selector: 'wordcard',
  templateUrl: 'wordcard-component.html',
})

export class WordcardComponent {
  @Input() wordcard: Wordcard;

  constructor() {
  }
}

