import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent implements OnInit {
  operation = "";

  constructor() { }

  ngOnInit(): void {
  }

  addNumber(value: string): void {
    this.operation += value;
  }
}
