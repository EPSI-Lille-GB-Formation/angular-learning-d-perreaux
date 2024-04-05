import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<header>
    <div id="page-title" class="header-element">
      {{ titleService.getTitle() }}
    </div>
    <div *ngIf="isLoggedIn; else loggedOutTemplate">
    <a (click)="signOut()">Se déconnecter</a>
  </div>
  <ng-template #loggedOutTemplate>
    <div class="auth-elements">
      <a routerLink="/users/sign-up" class="header-element">Créer un compte</a>
      <a routerLink="/users/sign-in" class="header-element">Se connecter</a>
    </div>
  </ng-template>
  </header>`,
  styles: [
    `
      header {
        display: flex;
        justify-content: space-evenly;
        height: 100px;
        color: blue;
        padding: 10px 0px;
        position: relative;
      }

      header #page-title {
        font-weight: bold;
        font-size: 40px;
        padding: 0px;
      }

      .auth-elements {
        display: flex;
        position: absolute;
        right: 0;

        padding: 0 20px;
        font-size: 16px;
      }

      .header-element {
        padding: 0 15px;
      }

      a {
        text-decoration: none;
      }
    `,
  ],
})
export class HeaderComponent implements OnDestroy {
  isLoggedIn: boolean = false;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public titleService: Title, 
    public authService: AuthService
  ) {
    this.subscription = this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
    })
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  signOut() {
    this.authService.signOut();
  }
}
