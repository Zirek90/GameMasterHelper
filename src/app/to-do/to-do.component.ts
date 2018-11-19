import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  tasks: any[] = []

  constructor() {
  }

  ngOnInit() {
  }

  submit(newTodoTask) {
    var newTodo = {
      title: newTodoTask,
      done: false
    }
    if (newTodoTask != '' && newTodoTask.value != '') {
      this.tasks.push(newTodo)
    }
  }

}
