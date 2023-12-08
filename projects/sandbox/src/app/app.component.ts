import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { BlockLinkDirective } from './block-link.directive';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective, BlockLinkDirective],
  template: `
  <h1>Découverte des directives avec Angular</h1>
 
 <a appBlockLink href="https://www.google.com/" target='_blank'>Go to Google</a>
 <a href="https://www.google.com/" target='_blank'>Go to Google</a>

 <p appHighlight bg-color='blue' bg-default='orange'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
   recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
   asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
 </p>
 <p>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
   recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
   asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
 </p>
 <p>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
   recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
   asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
 </p>
 <p>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
   recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
   asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
 </p>`,
  styles: [],

})
export class AppComponent {
  
}
