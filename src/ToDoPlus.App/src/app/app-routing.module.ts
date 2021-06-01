import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContextResolverGuard } from '@core/context-resolver.guard';

const routes: Routes = [
{
  path:"",
  children:[],
  canActivate: [ContextResolverGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
