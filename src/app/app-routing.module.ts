import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { authenticationGuard } from './guards/authentication.guard';
import { authorizationGuard } from './guards/authorization.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},

  {path:"admin",component:AdminTemplateComponent,canActivate:[authenticationGuard],children:[
    {path:"products",component:ProductsComponent},
  {path:"newProduct",component:NewProductComponent,canActivate:[authorizationGuard]},
  {path:"editProduct/:id",component:EditProductComponent,canActivate:[authorizationGuard]},
  {path:"home",component:HomeComponent},
  {path:"notAuthorized",component:NotAuthorizedComponent}
  ]
},
 
  
  {path:"",redirectTo:"login",pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
