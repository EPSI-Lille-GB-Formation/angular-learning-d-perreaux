import { User } from "../models/user";

export const USERS: User[] = [
    {
        id: 1,
        email: "admin@example.com",
        password: "admin",
        role: "admin"
    },
    {
        id: 2,
        email: "user@example.com",
        password: "user",
        role: "user"
    }
]