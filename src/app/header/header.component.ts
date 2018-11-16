import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dateInfo: string;

  constructor() { 
    setInterval(() => {
      let currentDate = new Date();
      this.dateInfo = currentDate.toLocaleTimeString();
    },1000)

  }

  ngOnInit() {
  }

}
