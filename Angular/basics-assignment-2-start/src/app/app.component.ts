import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: String = '';

  isUserNameEmpty() {
    //console.log(this.username === '')
    return this.username === '';
  }

  onResetUsername() {
  this.username = '';
  }
}
