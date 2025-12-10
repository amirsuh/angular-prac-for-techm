import { Component, Input, OnChanges, OnInit, DoCheck,
         AfterContentInit, AfterContentChecked, AfterViewInit,
         AfterViewChecked, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child implements OnChanges, OnInit, DoCheck,
                                     AfterContentInit, AfterContentChecked,
                                     AfterViewInit, AfterViewChecked, OnDestroy{
@Input() name: string = '';
  @Input() count: number = 0;

  logs: string[] = [];
  private viewChild: any;

  ngOnChanges(changes: any) {
    this.logs.push(`1. ngOnChanges: ${JSON.stringify(changes)}`);
  }

  ngOnInit() {
    this.logs.push('2. ngOnInit: Initial setup complete');
  }

  ngDoCheck() {
    this.logs.push('3. ngDoCheck: Change detection running');
  }

  ngAfterContentInit() {
    this.logs.push('4. ngAfterContentInit: Projected content ready');
  }

  ngAfterContentChecked() {
    this.logs.push('5. ngAfterContentChecked: Content checked');
  }

  ngAfterViewInit() {
    this.logs.push('6. ngAfterViewInit: View & ViewChild ready');
  }

  ngAfterViewChecked() {
    this.logs.push('7. ngAfterViewChecked: View checked');
  }

  ngOnDestroy() {
    this.logs.push('8. ngOnDestroy: Cleanup time');
  }
}
