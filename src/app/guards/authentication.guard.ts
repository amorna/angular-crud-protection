import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AppStateService } from '../services/app-state.service';



export const authenticationGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const appState = inject(AppStateService);
  if(appState.authState.isAuthenticated==true)
  {
    return true;
  }
else{
  alert('Acces interdit!!')
   
  router.navigateByUrl("/login");
  return false;
}
  
};
