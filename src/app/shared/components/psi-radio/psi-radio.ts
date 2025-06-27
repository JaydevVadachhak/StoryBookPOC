import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-psi-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './psi-radio.html',
  styleUrl: './psi-radio.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PsiRadio),
      multi: true
    }
  ]
})
export class PsiRadio implements ControlValueAccessor {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() size: 'medium' | 'small' = 'medium';
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() value: any;
  @Output() checkedChange = new EventEmitter<boolean>();

  // ControlValueAccessor implementation
  private onChange: any = () => {};
  private onTouched: any = () => {};

  select() {
    if (this.disabled || this.checked) {
      return;
    }
    this.checked = true;
    this.onChange(this.value);
    this.onTouched();
    this.checkedChange.emit(this.checked);
  }

  // ControlValueAccessor interface methods
  writeValue(value: any): void {
    this.checked = value === this.value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get radioClasses() {
    return {
      'psi-radio': true,
      'psi-radio--checked': this.checked,
      'psi-radio--unchecked': !this.checked,
      'psi-radio--disabled': this.disabled,
      'psi-radio--medium': this.size === 'medium',
      'psi-radio--small': this.size === 'small'
    };
  }

  get labelClasses() {
    return {
      'psi-radio__label': true,
      'psi-radio__label--disabled': this.disabled,
      'psi-radio__label--medium': this.size === 'medium',
      'psi-radio__label--small': this.size === 'small'
    };
  }
} 