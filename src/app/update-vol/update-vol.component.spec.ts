import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVolComponent } from './update-vol.component';

describe('UpdateVolComponent', () => {
  let component: UpdateVolComponent;
  let fixture: ComponentFixture<UpdateVolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVolComponent]
    });
    fixture = TestBed.createComponent(UpdateVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
