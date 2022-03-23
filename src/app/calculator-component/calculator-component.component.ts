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
    this.result = eval(this.operation);
  }

  toZero(): void {
    this.result = "";
    this.operation = "";
  }
}
