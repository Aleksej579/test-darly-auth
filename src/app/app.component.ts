import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'; //new

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Auth';

  //new
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
}

export class InputErrorsExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
