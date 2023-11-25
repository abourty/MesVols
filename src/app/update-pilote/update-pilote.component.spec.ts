import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePiloteComponent } from './update-pilote.component';

describe('UpdatePiloteComponent', () => {
  let component: UpdatePiloteComponent;
  let fixture: ComponentFixture<UpdatePiloteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePiloteComponent]
    });
    fixture = TestBed.createComponent(UpdatePiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
