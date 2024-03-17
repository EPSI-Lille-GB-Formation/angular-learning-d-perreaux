import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from './page';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  pageUrl = 'api/pages';

  constructor(private http: HttpClient) {}

  getAllPages(): Observable<Page[]> {
    return this.http
      .get<Page[]>(this.pageUrl)
      .pipe(tap((data) => console.log('page.service', data)));
  }
}
