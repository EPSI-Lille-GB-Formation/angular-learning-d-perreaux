import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <form #signInForm="ngForm" (ngSubmit)="onSubmit(signInForm)">
      <input type="email" [(ngModel)]="email" name="email" required placeholder="Email">
      <input type="password" [(ngModel)]="password" name="password" required placeholder="Password">
      <button type="submit">Se connecter</button>
    </form>  
  `,
  styles: [
    `
    form {
        margin: 20px;
      }
    `
  ]
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, 
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    this.authService.signIn(this.email, this.password).subscribe(user => {
      if (user) {
        console.log("Connexion réussie", user);
        this.router.navigate(['/books'])
      } else {
        console.log("Échec de la connexion");
      }
    });
  }
}
