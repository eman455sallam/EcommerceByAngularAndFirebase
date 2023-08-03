import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
   isUser:boolean =false;
   isAdmin:boolean=false;
  constructor(private as:AuthService ,private router:Router ,private us:UserService){

  }
  ngOnInit(){
    this.isAdmin=false;
    this.as.user.subscribe(user=>{
      if(user){
       this.isUser=true;
       this.as.userId=user.uid;
       this.us.getUser(this.as.userId).subscribe(data=>{
        const stringValue: boolean | undefined = data['isAdmin'];
        const booleanValue = typeof stringValue === 'boolean' ? stringValue : stringValue === 'false' ? false : Boolean(stringValue);
        if( booleanValue===true){
          console.log(booleanValue)
          this.isAdmin=true
        }
       })
      }else{
       this.isUser=false;
       this.as.userId='';
      }
   })


  }
  
signout(){
  this.as.signOut()
  .then(()=>this.router.navigate(['login']))
  .catch(()=>console.log("error logout"))

}
}
