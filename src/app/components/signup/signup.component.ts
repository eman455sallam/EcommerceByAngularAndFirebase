import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

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
constructor(private authService:AuthService ){

}
onSubmit(signup:NgForm){
  // console.log(signup.value );
  let data=signup.value; 
  this.authService.signUp( data.email,data.password) 
  .then(data => console.log(data))
  .catch(error =>console.log("",error))


 
}


}
