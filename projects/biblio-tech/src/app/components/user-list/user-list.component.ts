import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
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
  title = 'UTILISATEURS';

  constructor(
    private userService: UserService,
    public titleService: Title) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => this.users = data);
    this.titleService.setTitle(this.title);
  }
}
