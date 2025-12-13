import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  SimpleChanges,
} from '@angular/core';
import { forkJoin, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-hchild',
  imports: [],
  templateUrl: './hchild.html',
  styleUrl: './hchild.scss',
})
export class Hchild
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
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
    const cold$ = new Observable((res) => {
      console.log('cold observable');
      res.next(Math.random());
    });
    cold$.subscribe((cold) => console.log(cold));
    const hot$ = new Subject();
    hot$.next('value');
    // hot$.subscribe(hot=>console.log(hot))

    // const hot$ = new Subject();

    hot$.subscribe((value) => {
      console.log('Received:', value);
    });
    hot$.next('value');
    hot$.next('value');

    const mhCityArray = of(['Pune', 'Nagpur', 'Mumbai', 'Thane']);
    const mpCityArray = of(['Bhopal', 'Indore']);

    forkJoin([mhCityArray, mpCityArray]).subscribe((result: any) => {
      console.log(...result[0],...result[1]);
      console.log(result[1]);
    });
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
