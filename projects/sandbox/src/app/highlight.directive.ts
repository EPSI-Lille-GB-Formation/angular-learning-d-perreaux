import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input('bg-color')
  bgHighlightColor = 'yellow';

  @Input('bg-default')
  bgDefaultHighlightColor = 'transparent';


  @HostBinding('style.backgroundColor')
  bgColor = this.bgDefaultHighlightColor;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.bgHighlightColor;
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.bgColor = this.bgDefaultHighlightColor;
  }

  ngOnInit(){  
    this.bgColor = this.bgDefaultHighlightColor;
  }
}
