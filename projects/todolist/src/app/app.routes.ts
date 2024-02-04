import { Routes } from '@angular/router';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'task/:id', component: TodoDetailComponent },
];
