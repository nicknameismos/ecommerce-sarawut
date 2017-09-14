import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';

@Directive({
  selector: '[color-radio]'
})
export class ColorRadio
{
  @Input('color-radio') color: string;

  constructor(public el: ElementRef, public renderer: Renderer,public log:LogServiceProvider) { }

  setColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    this.renderer.setElementStyle(this.el.nativeElement, 'borderColor', color);
  }

  ngOnInit() {
    this.log.info(this.color);
    this.setColor(this.color);
  }
}
