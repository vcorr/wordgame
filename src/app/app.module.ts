import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {WordcardsModule} from "./wordcards/wordcards.module";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {reducer as wordcardReducer} from "./wordcards/model/wordcard.reducer";
import {EffectsModule} from "@ngrx/effects";
import {WordcardEffects} from "./wordcards/model/wordcard.effects";
import {AngularFireModule} from "angularfire2";
import "hammerjs";
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbar, MdToolbarModule} from '@angular/material';


export const firebaseConfig = {
  apiKey: "AIzaSyCReY_rKhGzvKmWLyLApXcPJML3iebiMls",
  authDomain: "wordgame-c795b.firebaseapp.com",
  databaseURL: "https://wordgame-c795b.firebaseio.com",
  storageBucket: "wordgame-c795b.appspot.com",
  messagingSenderId: "1049197851907"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule,
    HttpModule,
    WordcardsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      wordcards: wordcardReducer
    }),
     EffectsModule.forRoot([WordcardEffects]),
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
