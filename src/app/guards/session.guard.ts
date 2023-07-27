import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const sessionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const sessionCredentials = localStorage.getItem('UUID');
  if (sessionCredentials) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
