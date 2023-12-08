import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TODOS } from '../mock-todo';
import { BorderHighlightDirective } from '../border-highlight.directive';


@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, BorderHighlightDirective],
  template:   `
  <h1>Liste des choses à faire :</h1>
 
 <ng-container *ngFor="let todo of todoList">
   <article BorderHighlightDirective>
     <div class="grid">
       <label for="todo-{{ todo.id }}">
         <input
           type="checkbox"
           id="todo-{{ todo.id }}"
           name="todo-{{ todo.id }}"
         />
         {{ todo.title }}
       </label>
       <div class="action">
         <a href="#">Edit</a>
         <a href="#">Delete</a>
       </div>
     </div>
   </article>
 </ng-container>
  `
,
  styles: [
    `
      .action {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }

      .action a, 
      a {
        border: 2px solid transparent;
      }
    `
  ]
})
export class TodoListComponent {
  todoList = TODOS;

  ngOnInit() {
    console.table(this.todoList);
    this.selectTodo(8);
  }

  selectTodo(id: number) {
    console.table(this.todoList[id-1]);
  }

}
