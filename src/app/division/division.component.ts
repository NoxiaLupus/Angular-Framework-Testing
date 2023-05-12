import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  public numberOne: number = 0;
  public numberTwo: number = 0;
  public quotient: number = 0;

  title = "Division";

  constructor() { }

  ngOnInit(): void {
  }

  divide() {
    this.quotient = this.numberOne / this.numberTwo;
  }
}
