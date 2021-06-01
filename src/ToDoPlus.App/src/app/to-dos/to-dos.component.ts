import { Component, OnInit } from '@angular/core';
import { ContextService, ToDo, ToDoService } from '@api';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent  {

  public vm$: Observable<{
    toDos: ToDo[]
  }> = this._contextService.currentContext$
  .pipe(
    switchMap(_ => this._toDoService.get()),
    map(toDos => ({ toDos}))
  )

  constructor(
    private readonly _contextService: ContextService,
    private readonly _toDoService: ToDoService
  ) { }
}
