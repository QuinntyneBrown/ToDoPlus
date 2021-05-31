import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToDoService, ContextService, ToDo } from '@api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public vm$: Observable<{ toDos: ToDo[]}> = this._toDoService.get()
  .pipe(
    map(toDos => ({ toDos}))
  );

  constructor(
    private readonly _contextService: ContextService,
    private readonly _toDoService: ToDoService
  ) {

  }

  
}
