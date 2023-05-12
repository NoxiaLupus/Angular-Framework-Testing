import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdditionComponent } from './addition.component';
import { FormsModule } from '@angular/forms';

describe('AdditionComponent', () => {
  let component: AdditionComponent;
  let fixture: ComponentFixture<AdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionComponent ],
      imports: [ 
        RouterTestingModule,
        FormsModule 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title "Addition"', () => {
    expect(component.title).toEqual('Addition');
  });

  it('should add two numbers', () => {
    component.numberOne = 5;
    component.numberTwo = 5;
    component.addition();
    expect(component.sum).toBe(10);
  })
});
