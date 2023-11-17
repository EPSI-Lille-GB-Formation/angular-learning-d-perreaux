import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <h1>Liste des choses à faire</h1>

  <ul *ngFor="let tache of todoList">
    <li *ngIf="!tache.isCompleted">{{ tache.title }}</li>

  </ul>
  `,
  styles: []
})
export class AppComponent {

  todoList = TODOS;

  ngOnInit() {
    console.table(this.todoList);
    this.selectTodo(8);
  }

  selectTodo(id: number) {
    console.table(this.todoList[id-1]);
  }

}
