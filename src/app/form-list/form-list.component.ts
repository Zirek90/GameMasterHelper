import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {

  monsterList: any[] = [];
  searchMonster:string;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.http.get('https://monsterlist-59e3a.firebaseio.com/monsters.json')
      .subscribe((resp) => {
        for (let key in resp) {
          this.monsterList.push(resp[key]);
        }
        // console.log(this.monsterList);
      })
    }

    filteredMonsterList() {
      return this.monsterList.filter((monster) => {
        return monster.category.match(this.searchMonster);
      })
    }

}
