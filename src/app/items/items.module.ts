import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemCardComponent} from "./items-list/item-card/item-card.component";
import {ItemDetailsComponent} from "./item-details/item-details.component";
import {ItemsComponent} from "./items.component";
import {ItemsRoutingModule} from "./items-routing.module";
import {ItemsListComponent} from './items-list/items-list.component';
import {ItemNewComponent} from './item-new/item-new.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ItemCardComponent,
    ItemDetailsComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemNewComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ItemsRoutingModule,
  ]
})
export class ItemsModule {
}
