import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Good } from '../interfaces/good';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodService {
  private dbPath = '/goods';
  goodsRef: AngularFirestoreCollection<Good> ;

  constructor(private db: AngularFirestore ,private fs:AngularFireStorage) {
    this.goodsRef = db.collection(this.dbPath);

  }

  getAll(): AngularFirestoreCollection<Good> {
    return this.goodsRef;
  }

  addNewProduct(name:String,price:Number,image:File){
     let ref=this.fs.ref('goods/'+image.name)
     ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(photoUrl=>{
        this.db.collection('goods').add({
          name,
          price,
          photoUrl
        })
       })
     })





  }
}

