import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, tap } from 'rxjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  updatePage(bookId: string, pageId: string, page: Page): Observable<any> {
    return this.http.put(`/api/books/${bookId}/pages/${pageId}`, page);
  }

  getPage(bookId: string, pageId: string): Observable<Page> {
    return this.http.get<Page>(`/api/books/${bookId}/pages/${pageId}`);
  }
  
  bookUrl = 'api/books';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>(this.bookUrl)
      .pipe(tap());
  }
}
