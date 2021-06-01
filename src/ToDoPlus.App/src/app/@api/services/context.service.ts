import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Context } from '@api';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { baseUrl } from '@core/constants';


@Injectable({
  providedIn: 'root'
})
export class ContextService  {

  public readonly currentContext$: BehaviorSubject<Context> = new BehaviorSubject(Context.Personal as Context);

  constructor(
    @Inject(baseUrl) private readonly _baseUrl: string,
    private readonly _client: HttpClient
  ) { }

  public getCurrent(): Observable<Context> {
    return this._client.get<{ context: Context }>(`${this._baseUrl}api/context`)
      .pipe(
        map(x => x.context)
      );
  }

  public setCurrent(options: { context: Context }): Observable<{ context: Context }> {
    return this._client.put<{ context: Context }>(`${this._baseUrl}api/context`, { context: +options.context })
    .pipe(
      tap(x => {
        this.currentContext$.next(options.context)
      }));
  }
}
