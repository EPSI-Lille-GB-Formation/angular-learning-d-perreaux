import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService{
    userUrl = 'api/users';

    constructor(
        private http: HttpClient,
    ) {}

    getAllUsers(): Observable<User[]> {
        return this.http
            .get<User[]>(this.userUrl)
            .pipe(tap(data => console.log("service", data)))
    }
}
