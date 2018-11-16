import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dateInfo: string;
  counter:number = 0;
  stoper:number;
  interval:any;

  constructor() { 
    setInterval(() => {
      let currentDate = new Date();
      this.dateInfo = currentDate.toLocaleTimeString();
    },1000)
  }

  ngOnInit() {
  }

  stoperStart() {
    if(this.counter != 0) { this.counter = 0};
     
    this.interval = setInterval(() => {
      this.counter++;
      this.stoper = this.counter;
    },1000)
  }
  stoperStop() {
    clearInterval(this.interval)
  }

}
