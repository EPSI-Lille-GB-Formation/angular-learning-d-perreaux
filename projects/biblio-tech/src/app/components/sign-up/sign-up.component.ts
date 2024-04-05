import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <form #signupForm="ngForm" (ngSubmit)="onSubmit(signupForm)">
      <input type="email" [(ngModel)]="user.email" name="email" required>
      <input type="password" [(ngModel)]="user.password" name="password" required>
      <select [(ngModel)]="user.role" name="role">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Créer un compte</button>
    </form>
  `,
  styles: [`
    
    form {
        margin: 20px;
      }
  `]
})
export class SignUpComponent {
  user: User = new User(null, '', '', 'user');

  constructor(
    private authService: AuthService
  ) {}

  onSubmit(form: NgForm) {
    if (this.validatePassword(this.user.password)) {
      this.authService.signUp(this.user).subscribe({
        next: (res: any) => {
          console.log('Compte créé', res);
        },
        error: (err) => {
          console.log("erreur de création", err);
        }
        
      });
    } else {
      console.log("Le mot de passe ne respecte pas les criètres de sécurité")
    }
  }

  validatePassword(password: string): boolean {
    const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$');
    return regex.test(password);
  }
}
