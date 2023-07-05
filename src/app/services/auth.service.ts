import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularAuth:AngularFireAuth ,private angularFirestore:AngularFirestore , private router:Router) { }



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
