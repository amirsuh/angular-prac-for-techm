import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  combineLatest,
  combineLatestWith,
  concatMap,
  debounceTime,
  delay,
  distinctUntilChanged,
  exhaustMap,
  filter,
  forkJoin,
  from,
  interval,
  mergeMap,
  Observable,
  of,
  Subject,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-debounceusingrxjs',
  imports: [ReactiveFormsModule],
  templateUrl: './debounceusingrxjs.html',
  styleUrl: './debounceusingrxjs.scss',
})
export class Debounceusingrxjs {
  searchControl: FormControl = new FormControl('');
  cityList$ = of(['Pune', 'Nagpur', 'Mumbai', 'Thane']);
  mhCityList$ = from(['Pune', 'Nagpur', 'Mumbai', 'Thane']);
  timeInterval$ = interval(1000);
  timerInterval$ = interval(1000);
  stopInterval$ = new Subject<void>();

  mhCityArray = of(['Pune', 'Nagpur', 'Mumbai', 'Thane']);
  mpCityArray = of(['Bhopal', 'Indore']);

  stateFilter: FormControl = new FormControl('');
  cityFilter: FormControl = new FormControl('');

  constructor(private http: HttpClient) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        filter((search: string) => search.trim().length > 3),
        switchMap((res: string) =>
          this.http.get('https://jsonplaceholder.typicode.com/users?search=' + res)
        )
      )
      .subscribe((res) => console.log(res));

    this.cityList$.subscribe((res: any) => console.log(res));
    this.mhCityList$.subscribe((res: any) => console.log(res));
    this.timeInterval$.pipe(takeUntil(this.stopInterval$)).subscribe((res: any) => {
      console.log(res);
      if (res == 5) {
        this.stopInterval$.next();
      }
    });

    this.timerInterval$.pipe(take(3)).subscribe((timer: number) => {
      console.log(timer);
    });
    this.login('test', '11223');
    forkJoin([this.mhCityArray, this.mpCityArray]).subscribe((result: any) => {
      console.log(result[0]);
      console.log(result[1]);
    });
    this.getUsers();

    const stateFilter$ = this.stateFilter.valueChanges;
    const cityFilter$ = this.cityFilter.valueChanges;
    combineLatest([stateFilter$, cityFilter$]).subscribe((res: any) => {
      console.log(res);
      //this will execute when both dropdown has value
    });
    stateFilter$.pipe(combineLatestWith(cityFilter$)).subscribe((result: any) => {
      console.log(result);
      //this will execute when both dropdown has value
    });

    const searchUrl = 'https://jsonplaceholder.typicode.com/users';
    from([2, 3, 4])
      .pipe(mergeMap((userid: number) => this.http.get(searchUrl + '/' + userid)))
      .subscribe((result: any) => {
        //debugger;
      });

    this.http
      .get(searchUrl)
      .pipe(
        mergeMap((res: any) => from(res)), // emit users one by one
        mergeMap((user: any) => this.http.get(searchUrl + '/' + user.id))
      )
      .subscribe((res: any) => {
       // debugger;
      });

    this.http
      .get(searchUrl)
      .pipe(mergeMap((res: any) => this.http.get(searchUrl + '/' + res[0].id)))
      .subscribe((res: any) => {
        //debugger;
      });

    const getAllUsers$ = this.http.get('https://jsonplaceholder.typicode.com/users');
    getAllUsers$
      .pipe(
        concatMap((user: any) =>
          this.http.get('https://jsonplaceholder.typicode.com/comments?userid=' + user[0].id)
        ),
        concatMap((comment: any) =>
          this.http.get('https://jsonplaceholder.typicode.com/comments?commentid=1')
        )
      )
      .subscribe((replies) => {
        console.log(replies)
      });
  }

  login(uName: string, pwd: string): Observable<any> {
    console.log('login login');
    return of({ userId: 123, uName: 'test', uPwd: '11223' }).pipe(delay(5000));
  }

  getUsers() {
    // this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
    //   mergeMap((res:any)=>{
    //     console.log(res)
    //     this.http.get('https://jsonplaceholder.typicode.com/users?search=' + 'test')
    //   })
    // ).subscribe((result)=>{
    //   console.log(result)
    // })

    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        mergeMap((res: any) => {
          console.log(res);
          return this.http.get('https://jsonplaceholder.typicode.com/users?search=' + 'test');
        })
      )
      .subscribe((result) => {
        console.log(result);
      });
  }
}
