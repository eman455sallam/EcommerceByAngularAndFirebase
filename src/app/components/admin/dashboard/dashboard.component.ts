import { Component } from '@angular/core';
import { Good } from 'src/app/interfaces/good';
import { GoodService } from 'src/app/services/good.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  goods:Good[]=[]
 constructor(private gs:GoodService){

 }
 ngOnInit(): void {
  this.getProducts()
 }
 getProducts(): void {
  this.gs.getAll().snapshotChanges().pipe(
    map(changes =>   //from rxjs
      changes.map(c =>
        ({ id: c.payload.doc.id,
           ...c.payload.doc.data() })
      )
    )
  ).subscribe(data => {
    this.goods = data;

  });
}

delete(index:number){
 this.gs.delete( this.goods[index].id as String)
}

updatePrice(index:number){
   this.gs.editPrice(this.goods[index].id as String,this.goods[index].price as number)
}
}
