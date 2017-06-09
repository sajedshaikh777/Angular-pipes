import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomHighlightDirective {

  constructor( public elem : ElementRef, public renderer: Renderer ) { 
  	// this.renderer.setElementStyle( this.elem.nativeElement, 'background-color', 'yellow');
  }


  @Input('color') color;

  @HostListener('mouseenter')
  onMouseEnter = function(){
  	// this.renderer.setElementStyle( this.elem.nativeElement, 'background-color', 'yellow');
  	this.renderer.setElementStyle( this.elem.nativeElement, 'background-color', this.color );
  }

  @HostListener('mouseleave')
  onMouseLeave = function(){
  	this.renderer.setElementStyle( this.elem.nativeElement, 'background-color', '');
  }


}
