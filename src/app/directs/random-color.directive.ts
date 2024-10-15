import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomColor]',
})
export class RandomColorDirective {
  randomColor: string;
  constructor(private ref: ElementRef) {
    this.randomColor = this.generateRandomColor();
  }

  generateRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  ngOnInit() {
    this.ref.nativeElement.style.background = this.randomColor;
    console.log(this.ref.nativeElement);
  }
}
