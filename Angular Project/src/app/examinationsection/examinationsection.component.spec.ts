import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationsectionComponent } from './examinationsection.component';

describe('ExaminationsectionComponent', () => {
  let component: ExaminationsectionComponent;
  let fixture: ComponentFixture<ExaminationsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
