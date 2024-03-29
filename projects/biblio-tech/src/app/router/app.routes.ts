import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookListComponent } from '../components/book-list/book-list.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { LayoutComponent } from '../components/layout/layout.component';

export const routes: Routes = [
  { path: '', 
  component: LayoutComponent,
  children: [
    {path: '', component: BookListComponent, data: { title: 'COLLECTION DE LIVRES'}},
    {path: 'users', component: UserListComponent, data: {title: 'UTILISATEURS'}}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}