import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor( private dataService :DataService) { }
  myCounter = 0
  ngOnInit() {
    this.myCounter = this.dataService.getCount();
  }
  getCount(){
    this.myCounter = this.dataService.getCount();
  
  }
  
}
