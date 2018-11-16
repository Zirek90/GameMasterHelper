import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name:string;
  hp:number;
  category:string;
  resp:any;

  constructor(private http: HttpClient) {
   }

  ngOnInit() {
  }

  submit() {
 
    this.http.post('https://monsterlist-59e3a.firebaseio.com/monsters.json', {
      name: this.name,
      hp: this.hp,
      category: this.category
    })
    .subscribe((resp) => {
      this.resp = resp;
      console.log(this.resp);
      this.name = '';
      this.hp = null;
      this.category = '';
    })
  }

}
