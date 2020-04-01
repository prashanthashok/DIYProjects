import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
mySub1: Subscription;
mySub2: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
    .map(
      (id: number) => {
        return id*2;
      }
    );

    this.mySub1 = myNumbers.subscribe(

        (number: Number) => {
          console.log(number);

      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        //observer.error('This does not work!');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        //observer.error('This does not work!');
        observer.next('third package');
      }, 6000);
    });
    this.mySub2 = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log("completed"); } 
    )
  }

  ngOnDestroy(){
    this.mySub1.unsubscribe();
    this.mySub2.unsubscribe();
  }
}
