import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AuthComponent} from "./auth.component";
import {LogInComponent} from "./log-in/log-in.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    SignUpComponent,
    AuthComponent,
    LogInComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'auth', component: AuthComponent}
    ])
  ]
})
export class AuthModule {
}
