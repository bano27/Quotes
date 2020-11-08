import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  quotes: MyQuotes[] = [
    {Postby: 'Ben', Quote: '“Challenges are what make life interesting and overcoming them is what makes life meaningful.”', Author: 'Joshua J. Marine' },
    {Postby: 'Susan', Quote: '“Let us always meet each other with smile, for the smile is the beginning of love.”', Author: 'Mother Teresa' },
    {Postby: 'Jeff', Quote: '“Remember that the happiest people are not those getting more, but those giving more.”', Author: 'Jackson Brown Jr' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
