import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Wordcard} from "./wordcard.model";
@Injectable()
export class WordcardService {

  constructor(private db:any) {

  }

  getCards():Observable<Wordcard[]> {
    return this.db.list('wordcards');
  }

  getCard(id:string): Observable<Wordcard> {
    return this.db.object(id);
  }
}
