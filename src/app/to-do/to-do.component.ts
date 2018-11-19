import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  tasks: any[] = []
  newTask:string;
  
  constructor() {
  }

  ngOnInit() {
  }

  submit(newTask) {
    var newTodo = {
      title: newTask,
      done: false
    }
    if (newTask != '' && newTask.value != '') {
      this.tasks.push(newTodo)
      this.newTask = '';
    }
  }

}
