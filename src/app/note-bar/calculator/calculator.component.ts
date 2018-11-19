import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  numberOne: number;
  numberTwo: number;
  numberResult: number;

  constructor() { }

  ngOnInit() {
  }

  add() {
    if (!isNaN(this.numberOne) && !isNaN(this.numberTwo)) {
      this.numberResult = this.numberOne + this.numberTwo;
    }
  }
  subtract() {
    if (!isNaN(this.numberOne) && !isNaN(this.numberTwo)) {
      this.numberResult = this.numberOne - this.numberTwo;
    }
  }
  multiply() {
    if (!isNaN(this.numberOne) && !isNaN(this.numberTwo)) {
      this.numberResult = this.numberOne * this.numberTwo;
    }
  }
  divide() {
    if (!isNaN(this.numberOne) && !isNaN(this.numberTwo)) {
      this.numberResult = this.numberOne / this.numberTwo;
    }
  }

}
