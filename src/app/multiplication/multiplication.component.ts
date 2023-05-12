import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  public numberOne: number = 0;
  public numberTwo: number = 0;
  public product: number = 0;

  title = "Multiplication";

  constructor() { }

  ngOnInit(): void {
  }

  multiply() {
    this.product = this.numberOne * this.numberTwo;
  }
}
