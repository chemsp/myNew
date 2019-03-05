import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myId = 0;
  myName ='';
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit() {
   // this.myId = this.activatedroute.snapshot.params['id'];
   // this.myName = this.activatedroute.snapshot.params['name'];
     this.activatedroute.params.subscribe((params)=>{
       this.myId = params['id'];
       this.myName = params['name'];
     });
  }

}
