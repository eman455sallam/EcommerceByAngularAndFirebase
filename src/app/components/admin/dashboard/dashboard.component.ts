import { Component } from '@angular/core';
import { GoodService } from 'src/app/services/good.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 constructor(private gs:GoodService){

 }
 ngOnInit(): void {
 }
 getProducts(){
 }
}
