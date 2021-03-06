import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth'
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user$: Observable<firebase.User>;
  constructor(private afAuth:AngularFireAuth) {
    this.user$ = afAuth.authState;
    
  
   }

  LogOut(){

    this.afAuth.auth.signOut();
  }

}
