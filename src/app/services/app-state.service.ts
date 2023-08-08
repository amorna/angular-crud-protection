import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public productsState:any={
    products:[],
    keyword:"",
    totalPages:0,
    pageSize:3,
    currentPage:1,
    totalProducts:0
    }

    public authState:any={
      isAuthenticated:false,
      username:undefined,
      token:undefined,
      roles:undefined
    }
    public setAuthState(state:any):void{
      this.authState={...this.authState,...state }
    }

  constructor() { }
}
