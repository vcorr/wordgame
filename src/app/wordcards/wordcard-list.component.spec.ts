import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {WordCardListComponent} from "./wordcard-list.component";
import {WordcardService} from "./wordcard.service";
import {Observable} from "rxjs";


describe('WordCardListComponent', () => {
  let component: WordCardListComponent;
  let fixture: ComponentFixture<WordCardListComponent>;
  let fakeService = jasmine.createSpyObj('fakeAf2db', ['getCards', 'object']);

  beforeEach(async(() => {

    fakeService.getCards.and.returnValue(Observable.of(null));
    TestBed.configureTestingModule({
      declarations: [ WordCardListComponent ],
      providers: [{provide: WordcardService, useValue: fakeService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
