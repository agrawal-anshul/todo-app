import { Component, OnInit } from '@angular/core';
import { TodoAppServiceService } from '../services/todo-app-service.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Task[] = []
  constructor(TodoAppServiceService:TodoAppServiceService) { 
    this.todos = TodoAppServiceService.getTodos()
  }

  ngOnInit(): void {
    
  }
  title:string = "To-Do List App with Angular"

  addTask(task:string){
    this.todos.push({'id':this.todos.length,'task':task})
    console.log(this.todos)
    
  }
  removeTask(task:Task | null){
    console.warn(task?.id)
    // this.todos.forEach((item, index) => {
    //   console.log(index);
    //   if(item.id === task.id) this.todos.splice(index,1);
    // })
    this.todos = this.todos.filter(item => item.id !== task?.id)
  }
}
