import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private as:AuthService ,private router:Router){

  }
signout(){
  this.as.signOut()
  .then(()=>this.router.navigate(['login']))
  .catch(()=>console.log("error logout"))

}
}
