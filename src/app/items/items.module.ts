import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemCardComponent} from "./items-list/item-card/item-card.component";
import {ItemDetailsComponent} from "./item-details/item-details.component";
import {ItemsComponent} from "./items.component";
import {RouterModule} from "@angular/router";
import {ItemsRoutingModule} from "./items-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ItemsListComponent} from './items-list/items-list.component';
import {ItemNewComponent} from './item-new/item-new.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ItemCardComponent,
    ItemDetailsComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemNewComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    ItemsRoutingModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class ItemsModule {
}
