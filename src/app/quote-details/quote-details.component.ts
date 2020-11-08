import { Component, OnInit } from '@angular/core';
import { MyQuotes } from '../my-quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  goals:MyQuotes[] = [
  {Postby: 'Ben', Quote: '“Get busy living or get busy dying.”', Author: 'Stephen King'},
  {Postby: 'Joe', Quote:'“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”', Author: 'Mark Caine'},
  {Postby: 'Cynthia', Quote:'“I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.”', Author: 'Abraham Lincoln'}];

  addNewquote(goal){}

  constructor() { }

  ngOnInit(): void {
  }

}
