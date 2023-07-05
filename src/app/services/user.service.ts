 import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs:AngularFirestore) { }

  addNewUser(id:any,name:string,address:string ){
      return  this.fs.doc('users/'+id).set({
          name:name,
          address:address,
        })

  }
}
