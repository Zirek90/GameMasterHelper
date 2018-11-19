import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  numberOne:number;
  numberTwo:number;
  numberResult:number;

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.numberResult = this.numberOne + this.numberTwo;

  }
  subtract() {
    this.numberResult = this.numberOne - this.numberTwo;
  }
  multiply() {
    this.numberResult = this.numberOne * this.numberTwo;
  }
  divide(){
    this.numberResult = this.numberOne / this.numberTwo;
  }

}
