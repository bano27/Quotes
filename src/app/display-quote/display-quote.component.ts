import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyQuotes } from '../my-quotes';
import { HttpClient } from '@angular/common/http';
import { Quoted } from '../quote-class/quote';

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  quote:Quoted;
  quotes: MyQuotes[] = [
    {Postby: 'Ben', Quote: '“Challenges are what make life interesting and overcoming them is what makes life meaningful.”', Author: 'Joshua J. Marine'},
    {Postby: 'Susan', Quote: '“Let us always meet each other with smile, for the smile is the beginning of love.”', Author: 'Mother Teresa'},
    {Postby: 'Jeff', Quote: '“Remember that the happiest people are not those getting more, but those giving more.”', Author: 'Jackson Brown Jr'}
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

  constructor(private http:HttpClient){}

  ngOnInit(): void {

    interface ApiResponse{
      author:string;
      quote:string;
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quoted(data.author, data.quote)
    })
  }
}
