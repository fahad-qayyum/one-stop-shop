import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavbarComponent} from './navbar/navbar.component';
import {ItemsModule} from "./items/items.module";
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {AuthComponent} from './auth/auth.component';
import {LogInComponent} from './auth/log-in/log-in.component';
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent,
    AuthComponent,
    LogInComponent,
  ],
  imports: [
    SharedModule,
    ItemsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
