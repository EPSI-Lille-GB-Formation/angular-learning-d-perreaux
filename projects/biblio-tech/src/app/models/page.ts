export class Page {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public createdAt: Date,
        public updatedAt: Date|null
    ) {
        this.createdAt = new Date();
    }
}