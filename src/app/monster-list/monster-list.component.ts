import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss']
})
export class MonsterListComponent implements OnInit {

  monsterList: any[];

  constructor(private http: HttpClient) {
    this.http.get('https://monsterlist-59e3a.firebaseio.com/monsters.json')
      .subscribe((resp) => {
        let arr = [];
        for (let key in resp) {
          
          arr.push(resp[key]);
          this.monsterList = arr;
        }
      })
  }

  ngOnInit() {
  }

 

}
