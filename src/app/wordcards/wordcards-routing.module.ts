import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordcardsComponent} from "./wordcards.component";
import {WordCardListComponent} from "./wordcard-list.component";

const routes: Routes = [
  {
    path:'wordcards',
    component: WordcardsComponent,
    children: [
      {path:'', component: WordCardListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WordcardsRoutingModule { }
