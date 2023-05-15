import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  title:string = "Basic To-Do App"
  todos: task[] = []

  addTask(task:string){
    this.todos.push({'id':this.todos.length,'task':task})
    console.log(this.todos)
  }
  removeTask(_task:task){
    console.warn(_task.id)
    this.todos = this.todos.filter(item => item.id !== _task.id)
  }
}
