import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Context } from '@api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContextService  {

  constructor(
    @Inject("baseUrl") private readonly _baseUrl: string,
    private readonly _client: HttpClient
  ) { }

  public getCurrent(): Observable<Context[]> {
    return this._client.get<{ contexts: Context[] }>(`${this._baseUrl}api/context`)
      .pipe(
        map(x => x.contexts)
      );
  }
  
  public SetCurrent(options: { context: Context }): Observable<{ context: Context }> {
    return this._client.put<{ context: Context }>(`${this._baseUrl}api/context`, { context: options.context });
  }
}
