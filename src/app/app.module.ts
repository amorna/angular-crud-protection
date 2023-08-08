import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NewProductComponent,
    EditProductComponent,
    LoginComponent,
    NavComponent,
    AdminTemplateComponent,
    DashbordComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
