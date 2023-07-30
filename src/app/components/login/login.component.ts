import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email=''
password=''
errorMessage=''
constructor(private as:AuthService ,private router:Router){

}
onSubmit(form:NgForm){
  let data=form.value;
  this.as.signIn(data.email, data.pass)
  .then((result)=>{
    
    this.errorMessage='';
    this.router.navigate(['home']);


  })
  .catch((error)=>{
    this.errorMessage=error.message.slice(10,-23);
  })


}

}
