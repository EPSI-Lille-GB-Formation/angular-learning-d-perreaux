import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `<nav>
    <h1>BiblioTech</h1>
    <img class="logo" src="/assets/images/alexandry-library.webp" alt="Alexandry librairy" />
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
