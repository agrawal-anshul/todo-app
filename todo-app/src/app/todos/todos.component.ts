import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  title:string = "To-Do List App with Angular"
  todos: Task[] = []

  addTask(task:string){
    this.todos.push({'id':this.todos.length,'task':task})
    console.log(this.todos)
  }
  removeTask(task:Task){
    console.warn(task.id)
    this.todos = this.todos.filter(item => item.id !== task.id)
  }
}
