import {CanActivateFn} from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('login') === 'true';
};
