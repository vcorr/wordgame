import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WordcardsRoutingModule} from "./wordcards-routing.module";
import {WordCardListComponent} from "./wordcardlist/wordcard-list.component";
import {WordcardService} from "./model/wordcard.service";
import {MdButtonModule, MdCardModule} from "@angular/material";
import {WordcardListItemComponent} from './wordcardlist/wordcard.listitem.component';

@NgModule({
  imports: [
    CommonModule,
    WordcardsRoutingModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [WordcardListItemComponent, WordCardListComponent],
  providers: [WordcardService]
})
export class WordcardsModule { }
