import { Component } from '@angular/core';
import { GoodService } from 'src/app/services/good.service';
import { map } from 'rxjs/operators';
import { Good } from 'src/app/interfaces/good';
import { CartService } from 'src/app/services/cart.service';
import { Shooping } from 'src/app/interfaces/shooping';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  goods: Good[]=[];
  add:number=-1;
  constructor(private goodService:GoodService ,private cs:CartService ,private us:UserService ,private as:AuthService,private router:Router){

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
      if(this.as.userId == ''){
        this.router.navigate(['login'])
      }else{
        this.add=+index;

      }
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
