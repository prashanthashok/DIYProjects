import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
submitted = false;
defaultSubscription = 'Advanced';
@ViewChild('f') subscriptionForm: NgForm;

submittedForm = {
  email: '',
  password: '',
  subscriptionType: ''
}

  onSubmit(){
    this.submitted = true;
    console.log("Form submitted: "+this.submitted);

    this.submittedForm.email = this.subscriptionForm.value.email;
    this.submittedForm.password = this.subscriptionForm.value.password;
    this.submittedForm.subscriptionType = this.subscriptionForm.value.subscription;
    this.subscriptionForm.reset();
  }
}
