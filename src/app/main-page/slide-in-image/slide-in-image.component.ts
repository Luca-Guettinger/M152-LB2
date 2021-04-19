/* tslint:disable:no-input-rename */
import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

const style1 = style({
  opacity: 1,
  transform: 'translateX(0)'
});

const style2 = style({
  opacity: 0,
  transform: 'translateX(-100%)'
});

@Component({
  selector: 'app-slide-in-image',
  templateUrl: './slide-in-image.component.html',
  styleUrls: ['./slide-in-image.component.scss'],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class SlideInImageComponent {
  state = 'hide';
  @Input('src') src = '';
  @Input('alt') alt = '';
  @Input('classes') classesImage = '';
  @Input('container-classes')classesContainer = '';

  constructor(public el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= componentPosition - 250) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }
}
