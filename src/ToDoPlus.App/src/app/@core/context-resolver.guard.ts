import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ContextService } from '@api';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContextResolverGuard implements CanActivate {
  constructor(
    private readonly _contextService: ContextService
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("guard");
      return this._contextService.getCurrent()
      .pipe(
        tap(context => this._contextService.currentContext$.next(context)),
        map(_ => true)
      )
  }

}
