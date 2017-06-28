import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {WordcardsModule} from "./wordcards/wordcards.module";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {reducer as wordcardReducer} from "./wordcards/wordcard.reducer";
import {EffectsModule} from "@ngrx/effects";
import {WordcardEffects} from "./wordcards/wordcard.effects";
import {AngularFireModule} from "angularfire2";
import {MaterialModule} from "@angular/material";
import "hammerjs";
import {AngularFireDatabaseModule} from 'angularfire2/database';


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
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule,
    HttpModule,
    WordcardsModule,
    AppRoutingModule,
    StoreModule.provideStore({
      wordcards: wordcardReducer
    }),
     EffectsModule.run(WordcardEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
