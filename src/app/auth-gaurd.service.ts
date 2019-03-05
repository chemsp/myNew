import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private dataservice: DataService) { }
  canActivate():boolean{
    return 
  }
}
