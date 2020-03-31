import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() linkStarted = new EventEmitter<number>();
interval;
lastNumber = 0;
  constructor() { }

  ngOnInit() {
  }

  linkStart(){
    this.interval = setInterval(
      () => {
        this.linkStarted.emit(this.lastNumber+1);
        this.lastNumber++;
    }, 1000);
  }

  linkStop(){
    clearInterval(this.interval);
  }
}
