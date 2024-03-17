import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageService } from '../src/app/page.service';
import { Page } from '../src/app/page';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="xxl">Biblio Tech</h1>
    <ng-container *ngFor="let page of pages">
      <article>
        {{ page.title }}
        {{ page.content }}
      </article>
    </ng-container> `,
  styles: [],
})
export class PageListComponent {
  pages: Page[] = [];

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService.getAllPages().subscribe((data) => this.pages = data);
  }
}
