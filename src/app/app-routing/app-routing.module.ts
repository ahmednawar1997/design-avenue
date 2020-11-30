import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FiltersComponent } from './../filters/filters.component';
import { BrowseComponent } from './../browse/browse.component';
import { HomeComponent } from './../home/home.component';
import { CustomDesignComponent } from './../custom-design/custom-design.component';
import { ViewProductComponent } from './../view-product/view-product.component';



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
    path: 'filters',
    component: FiltersComponent,
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
