import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextSelectComponent } from './context-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContextSelectComponent
  ],
  exports: [
    ContextSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContextSelectModule { }
