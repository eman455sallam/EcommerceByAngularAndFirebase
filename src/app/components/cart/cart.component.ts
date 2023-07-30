import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Shooping } from 'src/app/interfaces/shooping';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnDestroy ,OnInit{
  cart:Shooping[]=[]
  goodObserver: Subscription = new Subscription;
constructor(private cs:CartService){

}

ngOnInit(){
this.getCartData();
}
ngOnDestroy(): void {
 this.goodObserver.unsubscribe();
}

getCartData(){
   this.goodObserver=this.cs.getCart().subscribe((data)=>{
    this.cart= data.map((shooping)=>{
      return{
          id:shooping.payload.doc.id,
          ...shooping.payload.doc.data() as Shooping

      }
    })
    this.cart.map((good)=>{
    })
  })
}

delete(index:number){
  this.cs.delete(this.cart[index].id as string)

}
addAmount(index:number ){
   this.cs.addAmount(this.cart[index].id as string ,this.cart[index].amount as number)
}


}

