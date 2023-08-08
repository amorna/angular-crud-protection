import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public appState:AppStateService,private router:Router){

  }
  actions:Array<any>=[
    {title:"Home",route:"/admin/home",icon:"house"},
    {title:"Produits",route:"/admin/products",icon:"box-seam"},
    {title:"Nouveau produit",route:"/admin/newProduct",icon:"sun"},
  ];
  currentAction:any;
  setCurrentAction(action:any){
    this.currentAction=action;
  }
  logout(){
    this.appState.authState={}
    this.router.navigateByUrl("/login")
  }
  login(){
    this.router.navigateByUrl("/login") 
  }
}
