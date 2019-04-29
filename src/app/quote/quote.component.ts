import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, "jane doe", "Robert A. Heinlein", "They didn't want it good, they wanted it Wednesday", 0, 0, new Date())
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }
  deleteQuote(onDeleteQuote, index){
    if(onDeleteQuote){
      let toDelete = confirm('Are you sure you want to delete this quote?')
      if (toDelete){
        this.quotes.splice(index, 1);
      }
    }
  }
  constructor() { }
  ngOnInit() { }
}
