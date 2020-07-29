import {Component, OnDestroy, OnInit} from '@angular/core';
import {ItemService} from "../../shared/services/item/item.service";
import {Item} from "../item.model";
import {ItemDatabaseService} from "../../shared/services/item/database/item-database.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-items-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {

  public itemList: Item[];
  private itemListSubscription: Subscription;

  constructor(private itemService: ItemService, private itemDatabaseService: ItemDatabaseService) {
  }

  ngOnInit(): void {
    this.itemList = this.itemService.getItemsList();
    this.itemListSubscription = this.itemService.itemsListSubject.subscribe(itemList => {
      this.itemList = itemList;
    })
  }

  ngOnDestroy() {
    this.itemListSubscription.unsubscribe();
  }

}
