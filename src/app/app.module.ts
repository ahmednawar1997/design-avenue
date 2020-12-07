import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { ImageViewerModule } from 'ngx-image-viewer';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomDesignComponent } from './custom-design/custom-design.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowseComponent } from './browse/browse.component';
import { FiltersComponent } from './filters/filters.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';

import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';

import { AuthInterceptor } from './helpers/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    CustomDesignComponent,
    HomeComponent,
    NavbarComponent,
    BrowseComponent,
    FiltersComponent,
    ViewProductComponent,
    AboutComponent,
    FooterComponent,
    ReviewsComponent,
    CartComponent,
    AdminComponent,
    EditProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule,
    MatInputModule,
    MatMenuModule,
    ColorPickerModule,
    ImageViewerModule.forRoot(),
    HttpClientModule
  ],
  providers: [CartService, ProductService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
