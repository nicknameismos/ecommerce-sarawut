import { Component, forwardRef, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { LogServiceProvider } from '../../providers/log-service/log-service';

const noop = () => { };

export function counterRangeValidator(maxValue, minValue) {
  return (c: FormControl) => {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0
      }
    };

    return (c.value > +maxValue || c.value < +minValue) ? err : null;
  }
}

@Component({
  selector: 'counter-input',
  templateUrl: 'counter-input.html',
  host: {
    'class': 'counter-input'
  },
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CounterInput), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterInput), multi: true }
  ]
})
export class CounterInput implements ControlValueAccessor, OnChanges {

  propagateChange: any = noop;
  validateFn: any = noop;

  @Input('counterValue') _counterValue = 0;
  @Input('max') counterRangeMax;
  @Input('min') counterRangeMin;
  @Output() count: EventEmitter<any> = new EventEmitter();

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(val);
  }

  ngOnChanges(inputs) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validateFn = counterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    }
  }

  writeValue(value) {
    if (value) {
      this.counterValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }

  increase() {
    this.counterValue++;
    this.count.emit(this.counterValue);
  }

  decrease() {
    if (this.counterValue > 1) {
      this.counterValue--;
      this.count.emit(this.counterValue);
    }
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }
}
