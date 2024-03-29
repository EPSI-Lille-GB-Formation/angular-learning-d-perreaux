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
  template: `
    <ng-container *ngFor="let book of books">
      <article>
        <div>{{ book.title }}</div>
        <div>{{ book.resume }}</div>
        <div *ngFor="let page of book.pages">
          <div>{{ page.content }}</div>
        </div>
      </article>
    </ng-container> `,
  styles: [],
})
export class BookListComponent {
  title = 'LIVRES'
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    public titleService: Title) {}

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(data => this.books = data);
    this.titleService.setTitle(this.title);
  }
}
