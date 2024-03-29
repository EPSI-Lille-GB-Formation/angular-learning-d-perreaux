import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `<header>
    <div id="page-title" class="header-element">{{ titleService.getTitle() }}</div>
    <div class="auth-elements">
      <div class="header-element">Créer un compte</div>
      <div class="header-element">Se connecter</div>
    </div>
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
    `,
  ],
})
export class HeaderComponent {


  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    public titleService: Title) {}

  ngOnInit() {

  }
}
