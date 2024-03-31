import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NavComponent],
  template: ` <app-nav></app-nav>
    <div class="layout-container">
      <app-header></app-header>

      <div class="router-content container">
        <router-outlet></router-outlet>
      </div>
    </div>`,
  styles: [
    `
      .layout-container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      .router-content {
      }
    `,
  ],
})
export class LayoutComponent {
  title = 'BiblioTech';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
