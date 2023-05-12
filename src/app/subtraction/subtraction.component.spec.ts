import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractionComponent } from './subtraction.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { concatMap } from 'rxjs';

describe('SubtractionComponent', () => {
  let component: SubtractionComponent;
  let fixture: ComponentFixture<SubtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtractionComponent ],
      imports: [ 
        RouterTestingModule,
        FormsModule 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title "Subtraction"', () => {
    expect(component.title).toEqual("Subtraction");
  });

  it('should subtract two numbers', () => {
    component.numberOne = 15;
    component.numberTwo = 5;
    component.subtract();
    expect(component.difference).toBe(10);
  })
});
