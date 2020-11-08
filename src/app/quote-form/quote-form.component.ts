import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyQuotes } from '../my-quotes'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new MyQuotes("","","");
  @Output() addquote = new EventEmitter<MyQuotes>();

  postQuote(){
    this.addquote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
