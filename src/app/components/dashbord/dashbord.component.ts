import { Component } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  constructor(public appState:AppStateService){

  }
  totalCheckedProducts(){
   let productsChecked=this.appState.productsState.products.filter((p:any)=>p.checked==true);
       return productsChecked.length;
  }

}
