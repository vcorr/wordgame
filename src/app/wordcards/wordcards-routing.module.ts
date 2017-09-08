import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WordCardListComponent} from "./wordcardlist/wordcard-list.component";

const routes: Routes = [
  {
    path: '',
    component: WordCardListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WordcardsRoutingModule {
}
