import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent implements OnInit {
  operation = "";
  result: string | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addNumber(value: string): void {
    this.operation += value;
  }
  
  calcOperation(): void {
    try {
      this.result = eval(this.operation);
    } catch (error) {
      this.result = "ERROR";
    }
  }

  toZero(): void {
    this.result = "";
    this.operation = "";
  }
}
