import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemDetailsComponent} from "./item-details/item-details.component";
import {RouterModule, Routes} from "@angular/router";
import {ItemComponent} from "./item.component";
import {ItemNewComponent} from "./item-new/item-new.component";
import {ItemListComponent} from "./item-list/item-list.component";


const itemRoutes: Routes = [
  {
    path: 'items', component: ItemComponent, children: [
      {path: '', pathMatch: 'full', component: ItemListComponent},
      {path: 'new', component: ItemNewComponent},
      {path: ':id', component: ItemDetailsComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(itemRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ItemRoutingModule {
}
