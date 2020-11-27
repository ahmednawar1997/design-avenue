import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomDesignComponent } from './custom-design/custom-design.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDesignComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
