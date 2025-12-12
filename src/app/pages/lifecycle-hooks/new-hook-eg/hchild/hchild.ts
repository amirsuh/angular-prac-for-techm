import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef,
         SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-hchild',
  imports: [],
  templateUrl: './hchild.html',
  styleUrl: './hchild.scss',
})
export class Hchild implements OnChanges, OnInit, DoCheck, AfterContentInit,
                                      AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() childData: string = '';
  @Input() count!: number;
  @ViewChild('viewElement') viewElement!: ElementRef;
    @ViewChild('myDiv') div!: ElementRef;

  private timer: any;

  constructor() {
    console.log('1. Constructor - DI setup');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges - Input changed:', this.childData);
  }

  ngOnInit() {
    console.log('3. ngOnInit - Initial data load');
    this.startTimer();
  }

  ngDoCheck() {
    console.log('4. ngDoCheck - Every change detection');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit - Content projected');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked - Content checked');
  }

  ngAfterViewInit() {
    console.log('7. ngAfterViewInit - View ready, access DOM');
    console.log('View element text:', this.viewElement.nativeElement.textContent);
    console.log(this.div.nativeElement);
  }




  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked - View checked');
  }

  ngOnDestroy() {
    console.log('9. ngOnDestroy - Cleanup');
    clearInterval(this.timer);
  }

  private startTimer() {
    this.timer = setInterval(() => console.log('Timer tick'), 5000);
  }
}
