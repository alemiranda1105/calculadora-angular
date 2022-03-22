import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {
  @Input() operation: string | undefined;
  @Input() result: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
