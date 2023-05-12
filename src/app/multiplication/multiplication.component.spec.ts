import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationComponent } from './multiplication.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('MultiplicationComponent', () => {
  let component: MultiplicationComponent;
  let fixture: ComponentFixture<MultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicationComponent ],
      imports: [ 
        RouterTestingModule,
        FormsModule 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title"Multiplication"', () => {
    expect(component.title).toEqual('Multiplication')
  });

  it('should multiplicate two numbers', () => {
    component.numberOne = 5;
    component.numberTwo = 3;
    component.multiply();
    expect(component.product).toBe(15);
  })
});
