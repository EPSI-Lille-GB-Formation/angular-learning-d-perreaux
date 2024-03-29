import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `<h1> UTILISATEURS </h1>

  <ng-container *ngFor="let user of users">
    <article> 
      <div> {{ user.id}} </div>
      <div> {{ user.email}}</div>
      <div> {{ user.role}}</div>
    </article>
  </ng-container>`,
  styles: [],
})
export class UserListComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => this.users = data);
  }
}
