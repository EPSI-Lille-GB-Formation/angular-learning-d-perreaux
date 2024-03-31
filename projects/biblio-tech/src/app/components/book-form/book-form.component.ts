import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
  <a routerLink="/books">Voir les livres</a>
  <form (ngSubmit)="onSubmit(form)" #form="ngForm">
    <label for="title">Title</label>
    <input type="text" id="title" required [(ngModel)]="book.title" name="title">
  
    <label for="resume">Résumé</label>
    <textarea id="resume" required [(ngModel)]="book.resume" name="resume"></textarea>
    <button type="submit">Créer un livre</button>
  </form>
  
  `,
  styles: []
})
export class BookFormComponent {
  book = new Book(null , "", "", new Date(), null, []);

  constructor(
    private bookService: BookService, 
    private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.bookService.addBook(this.book).subscribe(newBook => {
        form.reset();
        this.book = new Book(null , '', '', new Date(), null, []);
      })
    }
  }
}
