import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signon',
  templateUrl: './signon.component.html',
  styleUrls: ['./signon.component.css']
})
export class SignonComponent implements OnInit {
email:string;
password:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  // goToPage(pageName:string):void
  // {
  //   this.router.navigate([`${pageName}`]);
  // }


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
