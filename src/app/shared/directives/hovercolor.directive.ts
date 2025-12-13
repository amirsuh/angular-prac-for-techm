import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector:'[hoverColor]'
})

export class HoverColorDirective {
  @Input('hoverColor') hoverColor!: string;
  @Input() defaultColor: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setColor(this.hoverColor || 'yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setColor(this.defaultColor || '');
  }

  private setColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
