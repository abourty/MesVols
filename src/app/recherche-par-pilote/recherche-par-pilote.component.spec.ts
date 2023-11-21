import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParPiloteComponent } from './recherche-par-pilote.component';

describe('RechercheParPiloteComponent', () => {
  let component: RechercheParPiloteComponent;
  let fixture: ComponentFixture<RechercheParPiloteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParPiloteComponent]
    });
    fixture = TestBed.createComponent(RechercheParPiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
