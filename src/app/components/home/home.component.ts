import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title: string;
  heading: string ;
  constructor() { 
    this.title = "FeedbackHub";
    this.heading = "Hola, Welcome to FeedbackHub, ....!!!@";
  }

  ngOnInit() {
  }

}
