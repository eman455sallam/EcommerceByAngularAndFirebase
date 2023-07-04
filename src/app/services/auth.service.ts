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

  signIn(){

  }

  login(){

  }

  
  // signUp(email:string , password:string){
  //   return this.angularAuth.createUserWithEmailAndPassword(email, password )
  //    .then(result=>{
  //      this.sendVerificationMail();
  //      this.setUserData(result.user);
  //    } )
  //    .catch(err=> err.message
       
  //    )
  //  }

  //  sendVerificationMail(){
  //    return this.angularAuth.currentUser
  //    .then(user => user?.sendEmailVerification())
  //    .then(()=>{ this.router.navigate(['verify-email-address']);
  //  }
  //    )
  //  }

  //  // set user data in firestore
  //  setUserData(user :any){
  //    const userRef:AngularFirestoreDocument<any>=this.angularFirestore.doc(
  //      `users/${user.uid}`
  //    );
  //    const userData:User ={
  //      uid:user.uid,
  //      email:user.email,
  //      name:user.name,
  //      address:user.address,
  //      password:user.password,
  //    }

  //  }
}
