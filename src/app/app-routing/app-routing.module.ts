import { LoginComponent } from './../login/login.component';
import { EditProductComponent } from './../edit-product/edit-product.component';
import { AdminComponent } from './../admin/admin.component';
import { CartComponent } from './../cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowseComponent } from './../browse/browse.component';
import { HomeComponent } from './../home/home.component';
import { CustomDesignComponent } from './../custom-design/custom-design.component';
import { ViewProductComponent } from './../view-product/view-product.component';
import { AboutComponent } from './../about/about.component';
import { AuthFilter } from '../helpers/AuthFilter';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'custom-design',
    component: CustomDesignComponent,
  },
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: 'browse/:id',
    component: ViewProductComponent
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthFilter],
  },
  {
    path: 'admin/edit/:id',
    component: EditProductComponent,
    canActivate: [AuthFilter],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
