import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrulesComponent } from './addrules.component';

describe('AddrulesComponent', () => {
  let component: AddrulesComponent;
  let fixture: ComponentFixture<AddrulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
