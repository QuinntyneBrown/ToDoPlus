import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDosComponent } from './to-dos.component';



@NgModule({
  declarations: [
    ToDosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToDosComponent
  ]
})
export class ToDosModule { }
