import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const appState = inject(AppStateService);
  const router = inject(Router);
  if(appState.authState.roles.includes("ADMIN")){
    return true;
  }else{
    router.navigateByUrl("/admin/notAuthorized")
    return false;
  }
  
};
