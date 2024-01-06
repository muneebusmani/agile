import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './cars/slider/slider.component';
import { CardGroupComponent } from './cars/card-group/card-group.component';
import { AboutUsComponent } from './cars/about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { CarsComponent } from './cars/cars.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    CardGroupComponent,
    AboutUsComponent,
    FooterComponent,
    CarsComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
