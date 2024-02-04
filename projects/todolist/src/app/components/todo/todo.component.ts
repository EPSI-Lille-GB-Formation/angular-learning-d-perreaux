import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from '../../todo';
import { BorderHighlightDirective } from '../../directives/border-highlight.directive';
import { TODOS } from '../../mock-todo';
import { Router } from '@angular/router';

@Component({
  selector: 'todo',
  standalone: true,
  imports: [CommonModule, BorderHighlightDirective],
  template: `
    <article *ngIf="todo">
      <div class="grid">
        <label for="todo-{{ todo.id }}">
          <input
            type="checkbox"
            id="todo-{{ todo.id }}"
            name="todo-{{ todo.id }}"
            [checked]="todo.isCompleted"
            (change)="onCheck()"
          />
          {{ todo.title }}
        </label>
        <div class="action">
          <a (click)="goToTaskById(todo.id)">Voir</a>
          <a href="#">Edit</a>
          <a href="#">Delete</a>
        </div>
      </div>
    </article>
  `,
  styles: [
    `
      .action {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }

      .action a,
      a {
        margin-left: 8px;
      }
    `,
  ],
})
export class TodoComponent {
  @Input('value')
  todo: Todo | undefined;

  constructor(private routeur: Router) {}

  onCheck() {
    if (this.todo) {
      this.todo.isCompleted = !this.todo?.isCompleted;
      console.table(this.todo);
    }
  }

  onClickDelete() {
    if (this.todo) {
      TODOS.splice(TODOS.indexOf(this.todo), 1);
    }
  }
  goToTaskById(todoId: number) {
    this.routeur.navigate(['task/', todoId]);
  }
}
