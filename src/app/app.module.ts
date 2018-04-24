import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GeekyRouterModule } from './geeky-router/geeky-router.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GeekyRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
