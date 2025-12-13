import { Directive, ElementRef, Host, HostListener, Input } from "@angular/core";

@Directive({
  selector:'[hoverColors]'
})

export class changeColorOnHoverDirective{
@Input() hoverColors: string = 'yellow';

  private originalColor: string | null = null;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.originalColor = this.el.nativeElement.style.color;
    this.el.nativeElement.style.color = this.hoverColors;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.color = this.originalColor;
  }


//   @Input() appHoverColor:string = 'yellow';
//   private originalColor = '';

//   constructor(private el:ElementRef){
// debugger
//   }
//   @HostListener('mouseenter') onEnter(){
//     debugger
//     this.originalColor = this.el.nativeElement.style.hoverColor
//     this.el.nativeElement.style.color = this.appHoverColor

//   }

//   @HostListener('mouseleave') onLeave(){
//     this.el.nativeElement.style.color = this.originalColor
//   }
}
