import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { ToDoService, ContextService, ToDo } from '@api';
import { FormControl } from '@angular/forms';

type ViewModel = {
  toDos: ToDo[]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  public readonly contextControl = new FormControl(null,[]);

  public vm$: Observable<ViewModel> = this._contextService.currentContext$
  .pipe(
    tap(x => this.contextControl.setValue(x, { emitEvent: false })),
    switchMap(_ => this._toDoService.get()),
    map(toDos => ({ toDos}))
  )

  constructor(
    private readonly _contextService: ContextService,
    private readonly _toDoService: ToDoService
  ) { }

  ngOnInit() {
    this.contextControl.valueChanges
    .pipe(
      switchMap(context => this._contextService.SetCurrent({ context }))
    ).subscribe();
  }

}
