import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // traz vários componentes do angular
    AppRoutingModule,
    PhotosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
