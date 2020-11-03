import { Component, OnInit } from '@angular/core';

import firebase from "firebase/app";

@Component({
  selector: 'app-page-reg',
  templateUrl: './page-reg.component.html',
  styleUrls: ['./page-reg.component.sass']
})
export class PageRegComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //new
  loginForm: any = {
    email: "",
    password: ""
  };
  //registr
  regForm() {
    let email = this.loginForm.email;
    let password = this.loginForm.password;
    console.log(`E: ${email} P: ${password}`);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

}
