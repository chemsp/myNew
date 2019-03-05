import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `<h1>It works</h1> 
    <b>Goog Work </b>`,
  styleUrls: [],
})
export class ProductComponent {
  title = "sampleApp";
  constructor(){}

  Add():number{
    return 1;
  }
}
