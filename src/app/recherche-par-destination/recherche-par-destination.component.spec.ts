import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParDestinationComponent } from './recherche-par-destination.component';

describe('RechercheParDestinationComponent', () => {
  let component: RechercheParDestinationComponent;
  let fixture: ComponentFixture<RechercheParDestinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParDestinationComponent]
    });
    fixture = TestBed.createComponent(RechercheParDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
