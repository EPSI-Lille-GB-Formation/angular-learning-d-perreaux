import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderHighlightDirective } from '../../directives/border-highlight.directive';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../../todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, BorderHighlightDirective, TodoComponent],
  template: `
    <h1>Liste des choses à faire :</h1>

    <a
      href="#"
      role="button"
      [class.secondary]="!completedFilter && !completedAll"
      (click)="onClickViewNotCompletedTaks()"
      >A faire</a
    >

    <a
      href="#"
      role="button"
      [class.secondary]="completedFilter && !completedAll"
      (click)="onClickViewCompletedTaks()"
      >Terminées</a
    >

    <a
      href="#"
      role="button"
      [class.secondary]="completedAll"
      (click)="onClickViewAllTasks()"
      >Tout</a
    >

    <ng-container *ngFor="let todo of todoList">
      <todo
        *ngIf="todo.isCompleted === completedFilter || completedAll"
        [value]="todo"
      ></todo>
    </ng-container>
  `,
  styles: [
    `
      a {
        margin-left: 8px;
      }
    `,
  ],
})
export class TodoListComponent {
  todoList: Todo[] = [];

  completedFilter = false;
  completedAll = false;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getAllTodo().subscribe((data) => (this.todoList = data));
    this.todoService.getTodoById(5).subscribe((todo) => console.log(todo));
  }

  onClickViewNotCompletedTaks() {
    this.completedAll = false;
    this.completedFilter = false;
  }

  onClickViewCompletedTaks() {
    this.completedAll = false;
    this.completedFilter = true;
  }

  onClickViewAllTasks() {
    this.completedAll = true;
  }
}
