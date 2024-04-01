import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Title } from '@angular/platform-browser';
import { Book } from '../../models/book';
import { Page } from '../../models/page';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngFor="let book of books">
  <article (click)="showPages(book)">
    <div>{{ book.title }}</div>
    <div>{{ book.resume }}</div>
  </article>
  <!-- Afficher la liste des pages si le livre est sélectionné -->
  <div *ngIf="selectedBook === book">
  <div *ngFor="let page of book.pages">
  <div (click)="editPage(book.id, page.id)">{{ page.content }}</div>
</div>
    </div>
</ng-container>`,
  styles: [],
})

export class BookListComponent {
  title = 'LIVRES'
  books: Book[] = [];
  selectedBook: Book | null = null;

  constructor(
    private bookService: BookService,
    public titleService: Title,
    private router: Router) {}

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(data => this.books = data);
    this.titleService.setTitle(this.title);
  }

  showPages(book: Book): void {
    if (this.selectedBook === book) {
      this.selectedBook = null;
    } else {
      this.selectedBook = book;
    }
  }

  editPage(bookId: number, pageId: number): void {
    this.router.navigate(['/edit', bookId, pageId]);
  }
}
