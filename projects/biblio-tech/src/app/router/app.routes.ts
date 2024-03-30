import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookListComponent } from '../components/book-list/book-list.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { LayoutComponent } from '../components/layout/layout.component';

export const routes: Routes = [
  { path: '', 
  component: LayoutComponent,
  children: [
    {path: 'livres', component: BookListComponent},
    {path: 'users', component: UserListComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}