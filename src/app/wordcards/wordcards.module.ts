import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WordcardsRoutingModule} from "./wordcards-routing.module";
import {WordcardsComponent} from "./wordcards.component";
import {WordCardListComponent} from "./wordcard-list.component";

@NgModule({
  imports: [
    CommonModule,
    WordcardsRoutingModule
  ],
  declarations: [WordcardsComponent, WordCardListComponent]
})
export class WordcardsModule { }
