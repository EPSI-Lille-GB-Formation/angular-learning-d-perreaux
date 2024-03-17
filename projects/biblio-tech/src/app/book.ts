export class Book {
    constructor(
        public id: number,
        public title: string,
        public resume: string,
        public createdAt: Date,
        public updatedAt: Date|null
    ) {
        this.createdAt = new Date();
    }
}