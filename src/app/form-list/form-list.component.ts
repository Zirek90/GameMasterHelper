import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {

  monsterList: any[];

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.http.get('https://monsterlist-59e3a.firebaseio.com/monsters.json')
      .subscribe((resp) => {
        // this.monsterList = resp
        let arr = [];
        for (let key in resp) {
          
          arr.push(resp[key]);
          this.monsterList = arr;
        }
        console.log(this.monsterList);
      })
    }

}
