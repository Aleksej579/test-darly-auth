import { Component, OnInit } from '@angular/core';

import firebase from "firebase/app";

//new
import "firebase/firestore"; //?
import "firebase/auth";

//new
const firebaseConfig = {
  apiKey: "AIzaSyC2mQCpMJncIzeZNC4uqmR0Q7ny_MEdUMo",
  authDomain: "authentication-5bff9.firebaseapp.com",
  databaseURL: "https://authentication-5bff9.firebaseio.com",
  projectId: "authentication-5bff9",
  storageBucket: "authentication-5bff9.appspot.com",
  messagingSenderId: "1007884366914",
  appId: "1:1007884366914:web:4a857f65569dff161e29db"
};

//new
export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app());



//old
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
    let email = this.loginForm.cemail;
    let password = this.loginForm.cpassword;
    console.log(`E: ${email} P: ${password}`);
    //exit user
    firebase.auth().signOut()
    //reg user
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode) {
          console.log("Invalid email or password !");
        }
      });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(
          `Congratulation Register & Authorized user: ${user.email
          } ! You accese to this page`
        );
        window.location.pathname = "/page-target";
      }
    });
  }

}
