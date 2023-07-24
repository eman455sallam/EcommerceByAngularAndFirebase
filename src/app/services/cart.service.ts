import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Good } from '../interfaces/good';
import { AuthService } from './auth.service';
import { Shooping } from '../interfaces/shooping';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Shooping[]=[];
  constructor( private as:AuthService,private fireStore:AngularFirestore) { }

  addToCart(data:Good){
    return this.fireStore.collection(`users/${this.as.userId}/cart`).add(data);

  }

  getCart(){
    return this.fireStore.collection(`users/${this.as.userId}/cart`).snapshotChanges();

  }

  delete(id:string){
   return this.fireStore.doc(`users/${this.as.userId}/cart/${id}`).delete();
  }

  addAmount(id:string ,amount:number){
      this.fireStore.doc(`users/${this.as.userId}/cart/${id}`).update({amount}
      )
  }
}
