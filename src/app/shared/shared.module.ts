import {NgModule} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {NavbarComponent} from "./navbar/navbar.component";


@NgModule({
  declarations: [LoadingSpinnerComponent, NavbarComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {
}
