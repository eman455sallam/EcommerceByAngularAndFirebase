import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name = '';
  email='';
  address='';
  password='';
  confirmPassword='';
  errorMessage:string='';
constructor(private authService:AuthService,private router:Router ,private us:UserService ){

}
onSubmit(signup:NgForm){
  // console.log(signup.value );
  let data=signup.value; 
  
  this.authService.signUp( data.email,data.pass) 
  .then(result => {
    this.errorMessage='';
    this.us.addNewUser(result.user?.uid ,data.name ,data.address)
    .then(()=>{
      this.router.navigate(['home'])

    })
  })
  .catch(error =>{
     this.errorMessage=error.message.slice(10,-30);
  })


 
}


}
