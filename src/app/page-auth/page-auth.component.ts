import { Component, OnInit } from '@angular/core';

import firebase from "firebase/app";

@Component({
  selector: 'app-page-auth',
  templateUrl: './page-auth.component.html',
  styleUrls: ['./page-auth.component.sass']
})
export class PageAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //new
  loginForm: any = {
    email: "",
    password: ""
  };
  //enter
  entForm() {
    let email = this.loginForm.email;
    let password = this.loginForm.password;
    console.log(`E: ${email} P: ${password}`);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }





}


// window.location = '/page-target'