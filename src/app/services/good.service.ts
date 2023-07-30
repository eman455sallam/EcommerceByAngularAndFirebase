import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Good } from '../interfaces/good';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodService {

  constructor(private db: AngularFirestore ,private fs:AngularFireStorage) {


  }

  getAll(): AngularFirestoreCollection<Good> {
    return this.db.collection('goods')
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

  delete(id:String){
    this.db.doc('goods/'+id).delete()
  }

  editPrice(id:String ,price:Number){
     this.db.doc('goods/'+id).update({price})
  }
}

