import { Page } from './page';

export class Book {
  constructor(
    public id: number,
    public title: string,
    public resume: string,
    public createdAt: Date,
    public updatedAt: Date | null,
    public pages: Page[]
  ) {
    this.createdAt = new Date();
  }
}
