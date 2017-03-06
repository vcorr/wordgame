import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WordcardsRoutingModule} from "./wordcards-routing.module";
import {WordcardComponent} from "./wordcard.component";
import {WordCardListComponent} from "./wordcard-list.component";
import {WordcardService} from "./wordcard.service";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    WordcardsRoutingModule
  ],
  declarations: [WordcardComponent, WordCardListComponent],
  providers: [WordcardService]
})
export class WordcardsModule { }
