import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
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
export class AppComponent implements OnInit, OnDestroy  {

  public readonly contextControl = new FormControl(null,[]);
  private readonly _destroyed$: Subject<void> = new Subject();

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
      takeUntil(this._destroyed$),
      switchMap(context => this._contextService.SetCurrent({ context }))
    ).subscribe();
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
