import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'; //new


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Auth';
}

export class InputErrorsExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}


//
// let f = document.querySelector('#cemail');
// console.log(f);
// var val = document.getElementById('cemail').value;


