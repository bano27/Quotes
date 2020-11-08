import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new MyQuotes();
  @Output() addQuote = new EventEmitter<MyQuotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
