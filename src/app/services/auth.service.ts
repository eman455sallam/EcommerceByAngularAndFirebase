import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userId:string=''
   user :Observable<firebase.User |null>


  constructor(private angularAuth:AngularFireAuth ,private angularFirestore:AngularFirestore , private router:Router) {
    this.user=angularAuth.user;
   }



  signUp(email:string,password:string){
     return this.angularAuth.createUserWithEmailAndPassword(email,password);
}

  signIn(email:string,password:string){
    return this.angularAuth.signInWithEmailAndPassword(email,password);

  }



  signOut(){
    return this.angularAuth.signOut();
  }
}
