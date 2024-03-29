import { Routes } from '@angular/router';
import { BookListComponent } from '../components/book-list/book-list.component';
import { UserListComponent } from '../components/user-list/user-list.component';

export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'users', component: UserListComponent },
];
