import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContextService } from '@api';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  private readonly _destroyed$ : Subject<void> = new Subject();

  public readonly vm$ = this._contextService.currentContext$
  .pipe(
    map(x => ({
      contextControl: new FormControl(x,[])
    }))
  )

  constructor(
    private readonly _contextService: ContextService
  ) { }

  public handleModelChange(formControl: FormControl) {
    this._contextService.setCurrent({ context: formControl.value })
    .pipe(
      takeUntil(this._destroyed$)
    )
    .subscribe();
  }

  public ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
