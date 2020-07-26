import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavbarComponent} from './navbar/navbar.component';
import {ItemsModule} from "./items/items.module";
import {RouterModule} from "@angular/router";
import {AuthComponent} from './auth/auth.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    SignUpComponent
  ],
  imports: [
    ReactiveFormsModule,
    ItemsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
