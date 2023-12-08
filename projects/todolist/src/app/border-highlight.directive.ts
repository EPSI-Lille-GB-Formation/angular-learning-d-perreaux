import { Directive, HostBinding, HostListener } from '@angular/core';
 
@Directive({
  selector: 'article',
  standalone: true,
})
export class BorderHighlightDirective {
  @HostBinding('style.borderColor')
  borderColor = 'transparent';
 
  @HostBinding('style.borderStyle')
  borderStyle = 'solid'
 
  @HostBinding('style.borderSize')
  borderWidth = '2px';
 
  @HostListener('mouseenter')
  onMouseEnter() {
    this.borderColor = 'blue';
  }
 
  @HostListener('mouseleave')
  onMouseOut() {
    this.borderColor = 'transparent';
  }
}
