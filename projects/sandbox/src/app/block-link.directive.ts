import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlockLink]',
  standalone: true
})
export class BlockLinkDirective {

  @HostListener('click', ['$event'])
    onClick(event: Event) {
      event.preventDefault();
  }
}
