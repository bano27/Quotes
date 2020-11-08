import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  quotes: MyQuotes[] = [
    {Postby: 'Ben', Quote: '“Challenges are what make life interesting and overcoming them is what makes life meaningful.”', Author: 'Joshua J. Marine', Posted: "2005-10-23"},
    {Postby: 'Susan', Quote: '“Let us always meet each other with smile, for the smile is the beginning of love.”', Author: 'Mother Teresa', Posted: "2020-03-13"},
    {Postby: 'Jeff', Quote: '“Remember that the happiest people are not those getting more, but those giving more.”', Author: 'Jackson Brown Jr', Posted: "2019-06-27"}
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.Posted = new Date(quote.Posted)
    this.quotes.push(quote)
  }

  deleteQuotes(isComplete, index){
    if (isComplete){
      this.quotes.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }
}
