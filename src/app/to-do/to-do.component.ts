import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  tasks: any[] = []
  newTask:string;
  taskDone:any;
  
  constructor() {
  }

  ngOnInit() {
  }

  submit(newTask) {
    var newTodo = {
      title: newTask,
      done: false
    }
    if (newTask) {
      this.tasks.push(newTodo)
      this.newTask = '';
    } 
  }
  // taskCompleted(task) {
  //  alert(task)
  // }
}
