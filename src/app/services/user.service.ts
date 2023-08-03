 import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isadmin:boolean=false
  constructor(private fs:AngularFirestore ,private as:AuthService) { }

  addNewUser(id:any,name:string,address:string ){
      return  this.fs.doc('users/'+id).set({
          name:name,
          address:address,
          isAdmin:false
        })

  }

  getUser(id:string){
     return this.fs.doc('users/'+id).valueChanges() as Observable<User>
  }


  isAdmin(){
    return  this.getUser(this.as.userId).pipe(
      map(user=>{
        const us=user as User
         return  us.isAdmin
      })
    )
  }

}
