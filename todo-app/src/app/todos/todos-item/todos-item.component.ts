import { Component, Input,Output,EventEmitter } from '@angular/core';
import { ClarityIcons, trashIcon } from '@cds/core/icon';
ClarityIcons.addIcons(trashIcon);

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent {
  Number = Number
  @Input() todo:Task | null = null
  @Output() todoDelete: EventEmitter<Task|null> = new EventEmitter()

  onClick(todo:Task | null){
    this.todoDelete.emit(todo)
    console.log('onClick has been triggered');
  }
}
