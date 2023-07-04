import { Component } from '@angular/core';
import { GoodService } from 'src/app/services/good.service';
import { map } from 'rxjs/operators';
import { Good } from 'src/app/interfaces/good';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  goods?: Good[];

  constructor(private goodService:GoodService){

  }
  ngOnInit(): void {
    this.retrieveGoods();
  }

  retrieveGoods(): void {
    this.goodService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.goods = data;
      
    });
  }
  addToCart(i:any){

  }
} 
