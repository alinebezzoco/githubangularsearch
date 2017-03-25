import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { ProfileComponent } from './components/profile.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ProfileComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }