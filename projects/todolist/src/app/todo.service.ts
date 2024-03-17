import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl = 'api/todos'  

  constructor(private http: HttpClient) {
    
   }

  getAllTodo() :Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl).pipe(
      tap((data) => console.log(data))
    );
  }

  getTodoById(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.todoUrl}/${todoId}`).pipe(
      tap((data) => console.log(data))
    )
  }
}
