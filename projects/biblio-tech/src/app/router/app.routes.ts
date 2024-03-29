import { Routes } from '@angular/router';
import { BookListComponent } from '../components/book-list/book-list.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { LayoutComponent } from '../components/layout/layout.component';

// export const routes: Routes = [
//   { path: '', component: BookListComponent },
//   { path: 'users', component: UserListComponent },
// ];

export const routes: Routes = [
  { path: '', 
  component: LayoutComponent,
  children: [
    {path: '', component: BookListComponent},
    {path: 'users', component: UserListComponent}
  ]},
];

