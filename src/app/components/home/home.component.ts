import { Component } from '@angular/core';
import { GoodService } from 'src/app/services/good.service';
import { map } from 'rxjs/operators';
import { Good } from 'src/app/interfaces/good';
import { CartService } from 'src/app/services/cart.service';
import { Shooping } from 'src/app/interfaces/shooping';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  goods: Good[]=[];
  add:number=-1;
  constructor(private goodService:GoodService ,private cs:CartService){

  }
  ngOnInit(): void {
    this.retrieveGoods();
  }
  retrieveGoods(): void {
    this.goodService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id,
             ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.goods = data;

    });
  }
  addToCart(index:number){
    this.add=+index;
  }
  buy(amount: number){

    let selected=this.goods[this.add];
    let data:Shooping={
      name:selected.name,
      amount:amount,
      price:selected.price,
    }
    this.cs.addToCart(data)
    .then(()=>this.add=-1)
  }
}
