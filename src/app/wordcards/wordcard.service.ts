import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Wordcard} from "./wordcard.model";
import {AngularFireDatabase} from "angularfire2";

@Injectable()
export class WordcardService {

  constructor(
    private af:AngularFireDatabase
  ) {
    console.log("wordcardService constructor called");
  }

  getCards():Observable<Wordcard[]> {
    console.log("WordcardService::getAllCards()");
    return this.af.list('wordcards');
  }

  getCard(id:string): Observable<Wordcard> {
//    return this.db.object(id);
    return null;
  }
}
