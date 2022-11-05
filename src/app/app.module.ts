import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserScreenComponent } from './Components/user-screen/user-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageLibraryComponent } from './Components/image-library/image-library.component';

@NgModule({
  declarations: [
    AppComponent,
    UserScreenComponent,
    ImageLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
