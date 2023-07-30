import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const deAuthGuard: CanActivateFn = (route, state) => {
  const as=inject(AuthService)
   const router=inject(Router)
  return new Promise((resolve)=>{
    as.user.subscribe(user=>{
       if(user){
        router.navigate(['home'])
        resolve(false)
       }else{
         resolve(true)
       }
    })
  })
};
