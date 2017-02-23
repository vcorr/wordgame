import {WordcardService} from "./wordcard.service";
import {Observable} from "rxjs";
import {Wordcard} from "./wordcard.model";
describe('WordcardService', () => {

  let wordcardService: WordcardService;
  let wordcards: Wordcard[] = [
    {id: '1', word: 'word1', image: 'img1'},
    {id: '2', word: 'word2', image: 'img2'},
    {id: '3', word: 'word3', image: 'img3'}
  ];
  let fakeAf2db = jasmine.createSpyObj('fakeAf2db', ['list', 'object']);

  beforeEach(() => {
    wordcardService = new WordcardService(fakeAf2db);
  });

  describe('getAllWordcards', () => {
    it('should return all wordcards', () => {
      fakeAf2db.list.and.returnValue(Observable.of(wordcards));
      let resultingCards: Observable<Wordcard[]> = wordcardService.getCards();

      expect(fakeAf2db.list).toHaveBeenCalledTimes(1);
      expect(resultingCards).toBeTruthy();
      resultingCards.subscribe(cards => {
        expect(cards.length).toBe(3);
      });
    });
  });

  describe('getCard', ()=> {
    it('should return the card with the id in the query', () =>{
      fakeAf2db.object.and.returnValue(Observable.of(wordcards[1]));
      let resultCard: Observable<Wordcard> = wordcardService.getCard("1");
      expect(fakeAf2db.object).toHaveBeenCalledTimes(1);
      expect(resultCard).toBeTruthy();
      resultCard.subscribe(card => {
        expect(card).toEqual(wordcards[1]);
      });
    });
  })

});
