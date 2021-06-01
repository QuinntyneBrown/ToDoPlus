import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContextResolverGuard } from '@core/context-resolver.guard';
import { ToDosComponent } from './to-dos/to-dos.component';

const routes: Routes = [
{
  path:"",
  component: ToDosComponent,
  canActivate: [ContextResolverGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
