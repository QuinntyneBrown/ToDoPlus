import { Component, ElementRef, forwardRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { takeUntil, tap } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
import { Context } from '@api';

@Component({
  selector: 'app-context-select',
  templateUrl: './context-select.component.html',
  styleUrls: ['./context-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContextSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ContextSelectComponent),
      multi: true
    }
  ]
})
export class ContextSelectComponent implements ControlValueAccessor,  Validator, OnDestroy  {
  private readonly _destroyed$: Subject<void> = new Subject();

  public contextControl = new FormControl(Context.Personal, [Validators.required]);

  constructor(
    private readonly _elementRef: ElementRef
  ) { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.contextControl.valid == true ? null : this.contextControl.errors;
  }

  writeValue(obj: any): void {
    this.contextControl.patchValue(obj, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.contextControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this._elementRef.nativeElement
      .querySelectorAll("*")
      .forEach((element: HTMLElement) => {
        fromEvent(element, "blur")
          .pipe(
            takeUntil(this._destroyed$),
            tap(x => fn())
          )
          .subscribe();
      });
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.contextControl.disable() : this.contextControl.enable();
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
