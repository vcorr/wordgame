import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {WordCardListComponent} from "./wordcard-list.component";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Wordcard} from "./wordcard.model";
import {WordcardComponent} from "./wordcard.component";
import {MaterialModule} from "@angular/material";

describe('WordCardListComponent', () => {
  let component: WordCardListComponent;
  let fixture: ComponentFixture<WordCardListComponent>;

  let fakeStore = jasmine.createSpyObj('fakeStore', ['select', 'dispatch']);
  let de = null;
  let element = null;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [WordCardListComponent, WordcardComponent],
      providers: [{provide: Store, useValue: fakeStore}]
    })
  }));

  beforeEach(() => {
    fakeStore.select.and.returnValue(Observable.from([]));
    fixture = TestBed.createComponent(WordCardListComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should list the wordcards', async(() => {
    fixture.detectChanges();
    let wordcards: Wordcard[] = [
      {id: '1', word: 'word1', image: 'img1'},
      {id: '2', word: 'word2', image: 'img2'},
      {id: '3', word: 'word3', image: 'img3'}
    ];

    fixture.componentInstance.cards = Observable.of(wordcards);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;
      console.log(element.textContent);
      expect(fakeStore.dispatch).toHaveBeenCalledTimes(1);
      expect(fakeStore.select).toHaveBeenCalledTimes(1);

      //TODO: to be enhanced when ui is in place

      expect(element.textContent).toContain('Solve');

    });
  }));
});
