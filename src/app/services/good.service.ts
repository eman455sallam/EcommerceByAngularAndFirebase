import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Good } from '../interfaces/good';

@Injectable({
  providedIn: 'root'
})
export class GoodService {
  private dbPath = '/goods';
  goodsRef: AngularFirestoreCollection<Good> ;

  constructor(private db: AngularFirestore) { 
    this.goodsRef = db.collection(this.dbPath);

  }

  getAll(): AngularFirestoreCollection<Good> {
    return this.goodsRef;
  }
}
