import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Page } from '../../models/page';

@Component({
  selector: 'app-page-editor',
  template: `<div *ngIf="page">
  <h2>{{ page.title }}</h2>
  <textarea []="page.content"></textarea>
  <button (click)="savePage()">Enregistrer</button>
</div>`
})

export class PageEditorComponent implements OnInit {
  bookId!: string;
  pageId!: string;
  page!: Page;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['bookId'];
      this.pageId = params['pageId'];
      this.loadPage();
    });
  }

  loadPage(): void {
    this.bookService.getPage(this.bookId, this.pageId).subscribe(page => {
      this.page = page;
    });
  }

  savePage(): void {
    this.bookService.updatePage(this.bookId, this.pageId, this.page).subscribe(() => {
      console.log('Page saved successfully.');
    });
  }
}
