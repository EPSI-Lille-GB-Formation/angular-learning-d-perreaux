import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageListComponent } from '../../page-list/page-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PageListComponent],
  template: `
  <div class="container">
    <router-outlet></router-outlet>
  </div>
`,
  styles: []
})
export class AppComponent {
  constructor() {

  }
  
  title = 'BiblioTech';
}
