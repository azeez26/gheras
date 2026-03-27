import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role'); // Assume stored on login
  
  if (token && role === 'admin') {
    return true;
  }
  
  router.navigate(['/dashboard']);
  return false;
};
