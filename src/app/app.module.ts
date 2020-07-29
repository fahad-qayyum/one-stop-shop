import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ItemsModule} from "./items/items.module";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./auth/auth.module";
import {UserModule} from "./user/user.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserModule,
    AuthModule,
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
