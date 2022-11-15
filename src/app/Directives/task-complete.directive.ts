import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTaskComplete]'
})
export class TaskCompleteDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    let li = this.el.nativeElement;
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/check.png)');
    this.renderer.setStyle(li, 'color','#aaa');
  }
}
