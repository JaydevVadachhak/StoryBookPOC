import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-psi-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './psi-toggle.html',
  styleUrl: './psi-toggle.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PsiToggle),
      multi: true
    }
  ]
})
export class PsiToggle implements ControlValueAccessor {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() size: 'medium' | 'small' = 'medium';
  @Input() label: string = '';
  @Input() avatarSrc: string = '';
  @Output() checkedChange = new EventEmitter<boolean>();

  // ControlValueAccessor implementation
  private onChange: any = () => {};
  private onTouched: any = () => {};

  toggle() {
    if (this.disabled) {
      return;
    }
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
    this.checkedChange.emit(this.checked);
  }

  // ControlValueAccessor interface methods
  writeValue(value: boolean): void {
    this.checked = value;
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

  get toggleClasses() {
    return {
      'psi-toggle': true,
      'psi-toggle--on': this.checked,
      'psi-toggle--off': !this.checked,
      'psi-toggle--disabled': this.disabled,
      'psi-toggle--medium': this.size === 'medium',
      'psi-toggle--small': this.size === 'small'
    };
  }

  get labelClasses() {
    return {
      'psi-toggle__label': true,
      'psi-toggle__label--disabled': this.disabled,
      'psi-toggle__label--medium': this.size === 'medium',
      'psi-toggle__label--small': this.size === 'small'
    };
  }
} 