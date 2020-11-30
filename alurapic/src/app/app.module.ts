import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // traz vários componentes do angular
    PhotosModule,
    ErrorsModule,
    CoreModule,
    AppRoutingModule
    // imports aqui só entra module e boa prática importar o App por último
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
