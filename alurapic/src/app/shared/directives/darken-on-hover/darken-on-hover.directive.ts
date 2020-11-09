import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  @Input() brightnessOver = '70%';

  constructor(
      private el: ElementRef,
      private render2: Renderer2
  ) {}

  @HostListener('mouseover')
  darkenOn() {
      // console.log('mouseover');
      this.render2.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightnessOver}`);
  }

  @HostListener('mouseleave')
  darkenOff() {
      // console.log('mouseleave');
      this.render2.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
