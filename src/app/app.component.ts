import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sampleApp';
  isDiabled = false;
  someValue= "Hello"
  myCounter =0;
  data;
  constructor(private dataService:DataService, private router: Router){  }

  ngOnInit(){
    this.dataService.increment();
    this.myCounter  = this.dataService.getCount();
    this.dataService.getData().subscribe((data)=>{
     // console.log(JSON.stringify(data));
    },);
 this.data =  this.dataService.getData_1();
  // console.log(m);
  }
  incrementCounter(){
    this.dataService.increment();
    this.myCounter  = this.dataService.getCount();
  }

  navTotest(){
    debugger
    this.router.navigate(['test2'],{queryParams:{"myData":"BoB"}});
  }

  logIn(){
    this.dataService.logIn();
  }

  
  logoff(){
    this.dataService.logOff();
  }
}
