import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookListComponent],
  providers: [Title],
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
   .app-container{
    display: flex;
    flex-direction: row;
   }
  `],
})
export class AppComponent {
  title= 'BiblioTech';

  constructor(private titleService: Title) {}

  ngOnInit(){
    this.titleService.setTitle(this.title);
  }

}
