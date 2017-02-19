import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {WordCardListComponent} from "./wordcard-list.component";


describe('WordCardListComponent', () => {
  let component: WordCardListComponent;
  let fixture: ComponentFixture<WordCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
