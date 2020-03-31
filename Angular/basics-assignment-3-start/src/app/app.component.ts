import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails: boolean = false;
  logEntries = [];
  logEntryNo: number = 0;

  OnToggleDetails(){
    this.logEntryNo += 1;
    this.displayDetails = !this.displayDetails;
    this.logEntries.push(new Date());
    console.log(this.logEntryNo);
    console.log(this.logEntries);
  }


}
