import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePilotesComponent } from './liste-pilotes.component';

describe('ListePilotesComponent', () => {
  let component: ListePilotesComponent;
  let fixture: ComponentFixture<ListePilotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePilotesComponent]
    });
    fixture = TestBed.createComponent(ListePilotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
