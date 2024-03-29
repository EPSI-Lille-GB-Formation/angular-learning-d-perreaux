import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookUrl = 'api/books';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>(this.bookUrl)
      .pipe(tap());
  }
}
