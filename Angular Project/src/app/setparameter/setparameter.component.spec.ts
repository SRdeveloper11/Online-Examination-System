import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetparameterComponent } from './setparameter.component';

describe('SetparameterComponent', () => {
  let component: SetparameterComponent;
  let fixture: ComponentFixture<SetparameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetparameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
