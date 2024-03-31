import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<nav>
    <h1>BiblioTech</h1>
    <img
      class="logo"
      src="/assets/images/alexandry-library.webp"
      alt="Alexandry librairy"
    />
    <a routerLink="/books">Livres</a>
    <a routerLink="/books/create">Créer un livre</a>
    <a routerLink="/users">Utilisateurs</a>
  </nav>`,
  styles: [
    `
      nav {
        background-color: #2b2a33;
        height: 100%;
        min-height: 100vh;
        width: 300px;
        color: #fbfbfe;
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }

      nav h1 {
        padding: 0;
        color: white;
        margin: 0 0 20px 0;
      }

      .logo {
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
      }

      a {
        text-decoration: none;
        margin: 10px 0 0 0;
        color: white;
      }
    `,
  ],
})
export class NavComponent {}
