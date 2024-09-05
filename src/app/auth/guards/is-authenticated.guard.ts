import { CanActivateFn } from '@angular/router';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  console.log('IsAuthenticated');
  console.log({route,state});

  return true;
};
