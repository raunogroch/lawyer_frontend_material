import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const authenticated = localStorage.getItem('UUID');
  const router = inject(Router);

  if (!authenticated) {
    return true;
  }

  router.navigate(['/dashboard']);
  return true;
};
