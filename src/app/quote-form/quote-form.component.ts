import { Component, OnInit } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
