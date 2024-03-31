import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<nav>
    <a routerLink="/"><h1>BiblioTech</h1></a>
    <img class="logo" src="/assets/images/alexandry-library.webp" alt="Alexandry librairy" />
    <a routerLink="/books">Voir les livres</a>
    <a routerLink="/books/create">Créer un livre</a>
    <a routerLink="/users">Voir les utilisateurs</a>
  </nav>`,
  styles: [`
  nav{
    background-color: #2b2a33;
    height : 100vh;
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
  }

  .logo {
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }
  `]
})
export class NavComponent {

}
