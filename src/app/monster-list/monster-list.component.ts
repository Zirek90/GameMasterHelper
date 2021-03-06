import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss']
})
export class MonsterListComponent implements OnInit {

  monsterList: any[] = [];
  searchMonster:string;

  constructor(private http: HttpClient) {
    this.http.get('https://monsterlist-59e3a.firebaseio.com/monsters.json')
      .subscribe((resp) => {
        for (let key in resp) {
          this.monsterList.push(resp[key])
        }
      })   
      // console.log(this.monsterList);

  }

  ngOnInit() {
  }

  filteredMonsterList() {
    return this.monsterList.filter((monster) => {
      return monster.category.match(this.searchMonster);
    })
  }

 

}
