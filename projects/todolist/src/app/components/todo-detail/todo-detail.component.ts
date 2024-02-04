import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todo-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Détail de la tâche :</h1>

    <article>
      <table role="grid">
        <tbody>
          <tr>
            <th scope="row"># ID</th>
            <td>{{ todo?.id }}</td>
          </tr>
          <tr>
            <th scope="row">Titre</th>
            <td>{{ todo?.title }}</td>
          </tr>
          <tr>
            <th scope="row">Contenu</th>
            <td>{{ todo?.content }}</td>
          </tr>
          <tr>
            <th scope="row">Auteur</th>
            <td>{{ todo?.author }}</td>
          </tr>
          <tr>
            <th scope="row">Date création</th>
            <td>{{ todo?.createdAt }}</td>
          </tr>
          <tr>
            <th scope="row">Date de réalisation</th>
            <td>
              {{ todo?.completedAt ? todo?.completedAt : 'Non réalisée' }}
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  `,
  styles: [],
})
export class TodoDetailComponent {
  todo: Todo | undefined;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const paramIdTodo = this.route.snapshot.paramMap.get('id');

    if (paramIdTodo) {
      this.todoService
        .getTodoById(+paramIdTodo)
        .subscribe((todo) => (this.todo = todo));
    }
  }
}
