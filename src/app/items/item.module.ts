import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemCardComponent} from "./item-list/item-card/item-card.component";
import {ItemDetailsComponent} from "./item-details/item-details.component";
import {ItemComponent} from "./item.component";
import {ItemRoutingModule} from "./item-routing.module";
import {ItemListComponent} from './item-list/item-list.component';
import {ItemNewComponent} from './item-new/item-new.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ItemCardComponent,
    ItemDetailsComponent,
    ItemComponent,
    ItemListComponent,
    ItemNewComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ItemRoutingModule,
  ]
})
export class ItemModule {
}
