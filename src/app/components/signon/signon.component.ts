import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-signon',
  templateUrl: './signon.component.html',
  styleUrls: ['./signon.component.css']
})
export class SignonComponent implements OnInit {
email:string;
password:string;
  constructor() { }

  ngOnInit() {
  }
  signOn()
  {
    if(this.email=="rab@gmail.com" && this.password=="test123")
    {
      console.log("Signing in..") ;
    }
    else
    {
       console.log("Cannot sign in");
    }
  }

}
