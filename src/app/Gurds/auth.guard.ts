import { AuthService } from 'src/app/services/auth.service';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
const as=inject(AuthService);
const router=inject(Router)
  return new Promise((resolve)=>{
    as.user.subscribe(user=>{
       if(user){
        resolve(true)
       }else{
         router.navigate(['/login'])
         resolve(false)
       }
    })
  })
};
