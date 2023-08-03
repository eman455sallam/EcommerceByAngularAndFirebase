import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const us=inject(UserService)
  const router=inject(Router)

  return new Promise(resolve => {
    us.isAdmin().subscribe(isAdmin => {
      // Check if isAdmin is a string and convert it to a boolean
      const isAdminBoolean = typeof isAdmin === 'string' ? isAdmin === 'true' : Boolean(isAdmin);

      if (isAdminBoolean) {
        resolve(true);
      } else {
        router.navigate(['/home']);
        resolve(false);
      }
    });
  });









};

