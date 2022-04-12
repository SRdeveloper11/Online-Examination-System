import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequestionsComponent } from './updatequestions.component';

describe('UpdatequestionsComponent', () => {
  let component: UpdatequestionsComponent;
  let fixture: ComponentFixture<UpdatequestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatequestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatequestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
