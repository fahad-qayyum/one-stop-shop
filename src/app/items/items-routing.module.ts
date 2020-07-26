import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemDetailsComponent} from "./item-details/item-details.component";
import {RouterModule, Routes} from "@angular/router";
import {ItemsComponent} from "./items.component";
import {ItemsListComponent} from "./items-list/items-list.component";
import {ItemNewComponent} from "./item-new/item-new.component";


const itemRoutes: Routes = [
  {
    path: 'items', component: ItemsComponent, children: [
      {path: '', pathMatch: 'full', component: ItemsListComponent},
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
export class ItemsRoutingModule {
}
