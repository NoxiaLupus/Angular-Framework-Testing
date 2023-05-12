import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';


import { DivisionComponent } from './division.component';

describe('DivisionComponent', () => {
  let component: DivisionComponent;
  let fixture: ComponentFixture<DivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionComponent ],
      imports: [ 
        RouterTestingModule,
        FormsModule 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title "Division"', () => {
    expect(component.title).toEqual('Division');
  });
  
  it('should divide two numbers', () => {
    component.numberOne = 15;
    component.numberTwo = 5;
    component.divide();
    expect(component.quotient).toBe(3);
  })
});
