import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookListComponent } from '../components/book-list/book-list.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { BookFormComponent } from '../components/book-form/book-form.component';

export const routes: Routes = [
  { path: '', 
  component: LayoutComponent,
  children: [
    {path: 'books', component: BookListComponent},
    {path: 'users', component: UserListComponent},
    {path: 'books/create', component: BookFormComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}