import { AfterViewInit, Component, ElementRef, ViewChild, asNativeElements } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Good } from 'src/app/interfaces/good';
import { GoodService } from 'src/app/services/good.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements AfterViewInit {
   @ViewChild('photoInput') photo!:ElementRef;
   constructor(private goodService:GoodService  ,private router:Router){
   }
  ngAfterViewInit(): void {

  }

  addnewProduct(form:NgForm){
    let name=(<Good>form.value).name as String,
       price=(<Good>form.value).price as Number,
       image=this.photo.nativeElement.files[0]

     this.goodService.addNewProduct(name ,price,image)
      form.reset();
      this.router.navigate(['home'])
  }
}
