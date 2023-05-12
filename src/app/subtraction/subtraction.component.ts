import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {

  public numberOne:  number = 0;
  public numberTwo: number = 0;
  public difference: number = 0;

  title = "Subtraction";
  
  constructor() { }

  ngOnInit(): void {
  }

  subtract() {
    this.difference = this.numberOne - this.numberTwo;
  }
}
