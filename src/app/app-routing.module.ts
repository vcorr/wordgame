import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordCardListComponent} from './wordcards/wordcardlist/wordcard-list.component';

const routes: Routes = [
      {path:'', pathMatch:'full', component: WordCardListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
