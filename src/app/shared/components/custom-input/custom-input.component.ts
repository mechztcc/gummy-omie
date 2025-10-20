import { Component, forwardRef, input, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { faCheckCircle, faCircleXmark, faClose, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NgClass } from '@angular/common';

interface CustomData {
  label: string;
  placeholder: string;
  prependIcon?: IconDefinition;
  appendIcon?: IconDefinition;
  type: string;
}

@Component({
  selector: 'app-custom-input',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
})
export class CustomInputComponent implements ControlValueAccessor {
  config = input<CustomData>();

  value: string = '';
  disabled = false;

  get invalid() {
    return this.ngControl?.invalid;
  }

  get valid() {
    return this.ngControl?.valid;
  }

  get touched() {
    return this.ngControl?.touched;
  }

  icons: any = {
    ok: faCheckCircle,
    error: faCircleXmark,
  };

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(value: any): void {
    this.value = value ?? '';
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

  onInput(value: string) {
    this.value = value;
    this.onChange(value);
  }
}
