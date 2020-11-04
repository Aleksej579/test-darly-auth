import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2mQCpMJncIzeZNC4uqmR0Q7ny_MEdUMo",
  authDomain: "authentication-5bff9.firebaseapp.com",
  databaseURL: "https://authentication-5bff9.firebaseio.com",
  projectId: "authentication-5bff9",
  storageBucket: "authentication-5bff9.appspot.com",
  messagingSenderId: "1007884366914",
  appId: "1:1007884366914:web:4a857f65569dff161e29db"
};

export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app());

@Component({
  selector: 'app-page-auth',
  templateUrl: './page-auth.component.html',
  styleUrls: ['./page-auth.component.sass']
})
export class PageAuthComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  loginForm: any = {
    email: "",
    password: ""
  };

  //enter
  entForm() {
    let email = this.loginForm.eemail;
    let password = this.loginForm.epassword;
    console.log(`E: ${email} P: ${password}`);
    //exit user
    firebase.auth().signOut()
    //enter user
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // console.log('stay this page');
        window.location.pathname = "/page-auth";
        if (errorCode) {
          console.log("Invalid email or password !");
        }
      });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(
          `Congratulation Authorized user: ${user.email
          } ! You accese to this page`
        );
        window.location.pathname = "/page-target";
      }
    });
  }

}
