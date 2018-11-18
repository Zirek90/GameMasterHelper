import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss']
})
export class DicesComponent implements OnInit {

  four:number;
  six:number;
  eight:number;
  ten:number;
  twelve:number;
  twenty:number;

  constructor() { }

  ngOnInit() {
  }

  diceFour(){
    this.four = Math.floor((Math.random() * 4) + 1);
  }
  diceSix(){
    this.six = Math.floor((Math.random() * 6) + 1);

  }
  diceEight(){
    this.eight = Math.floor((Math.random() * 8) + 1);

  }
  diceTen(){
    this.ten = Math.floor((Math.random() * 10) + 1);

  }
  diceTwelve(){
    this.twelve = Math.floor((Math.random() * 12) + 1);

  }
  diceTwenty(){
    this.twenty = Math.floor((Math.random() * 20) + 1);

  }

}
