import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<div>layout</div>
  <div class="router-content">
  <router-outlet></router-outlet>
  </div>`,
  styles: []
})
export class LayoutComponent {

}
