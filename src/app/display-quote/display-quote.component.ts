import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  quotes: MyQuotes[] = [
    {Postby: 'Ben', Quote: '“Challenges are what make life interesting and overcoming them is what makes life meaningful.”', Author: 'Joshua J. Marine', Posted: (2005,7,9) },
    {Postby: 'Susan', Quote: '“Let us always meet each other with smile, for the smile is the beginning of love.”', Author: 'Mother Teresa', Posted: (2011,11,23)},
    {Postby: 'Jeff', Quote: '“Remember that the happiest people are not those getting more, but those giving more.”', Author: 'Jackson Brown Jr', Posted: (2013,5,14) }
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
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
