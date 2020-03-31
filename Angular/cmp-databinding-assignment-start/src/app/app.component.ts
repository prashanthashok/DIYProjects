import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  linkStart(linkedNumber: number){
    if(linkedNumber %2 == 0){
      this.evenNumbers.push(linkedNumber);
    }
    else{
      this.oddNumbers.push(linkedNumber);
    }
  }
}
