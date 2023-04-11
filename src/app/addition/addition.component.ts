import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  public numberOne: number = 0;
  public numberTwo: number = 0;
  public sum: number = 0;

  constructor() {}

  ngOnInit(): void { }

  addition() {
    this.sum = this.numberOne + this.numberTwo;
  }
}
