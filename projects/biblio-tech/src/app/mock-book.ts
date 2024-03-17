import { Book } from "./book";

export const BOOKS: Book[] = [
    {
        id: 1,
        title: "Book1",
        resume: "j'aime les livres ",
        createdAt: new Date(),
        updatedAt: null, 
        pages: [
            {
                id: 1,
                title: "Page1 book1",
                content: "j'aime les pages",
                createdAt: new Date(),
                updatedAt: null, 
            },
            {
                id: 2,
                title: "Page2 book1",
                content: "j'aime les pages deux fois",
                createdAt: new Date(),
                updatedAt: null
            }
        ]
    },
    {
        id: 2,
        title: "Book2",
        resume: "j'aime les livres deux fois",
        createdAt: new Date(),
        updatedAt: null, 
        pages: [
            
                {
                    id: 1,
                    title: "Page1 book2",
                    content: "j'aime les pages",
                    createdAt: new Date(),
                    updatedAt: null
                },
                {
                    id: 2,
                    title: "Page2 book2",
                    content: "j'aime les pages deux fois",
                    createdAt: new Date(),
                    updatedAt: null
                }
            ]
        
    }
]