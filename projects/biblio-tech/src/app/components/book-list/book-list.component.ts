import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Title } from '@angular/platform-browser';
import { Book } from '../../models/book';
import { Page } from '../../models/page';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="books-grid-container">
    <ng-container *ngFor="let book of books">
      <a>
        <article>
          <div>{{ book.title }}</div>
          <div>{{ book.resume }}</div>
          <div *ngFor="let page of book.pages">
            <div>{{ page.content }}</div>
          </div>
        </article>
      </a>
    </ng-container>
  </div>`,
  styles: [
    `
    .books-grid-container {
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      margin: auto;
      max-width: 1000px;
    }

    a {
      text-decoration: none;
      color: #0000ff;

    }
    
    article {
      width: 250px;
      height: 350px;
      border-radius: 0 25px 25px 0;
    }
    `,
  ],
})
export class BookListComponent {
  title = 'Livres';
  books: Book[] = [];

  constructor(private bookService: BookService, public titleService: Title) {}

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((data) => (this.books = data));
    this.titleService.setTitle(this.title);
  }
}
