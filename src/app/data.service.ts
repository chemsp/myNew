import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
   counter = 0;
   data = {};
   isLoggedIn = false;
  constructor( private http: HttpClient) { }

  increment(){
    this.counter++;
  }

  getCount(){
    return this.counter;
  }
  getData(){
    return this.http.get('https://api.myjson.com/bins/lz8ui');
  }

  getData_1(){
   // return this.http.get('https://api.myjson.com/bins/lz8ui');
   this.getData().subscribe((data)=>{ 
   debugger;
    this.data = data;
    
  });
  return this.data;
   
  }

  logIn(){
    this.isLoggedIn = true;
  }
  logOff(){
    this.isLoggedIn = false;
  }
}
