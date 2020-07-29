import {Injectable} from '@angular/core';
import {Item} from "../../../items/item.model";
import {UUID} from "angular2-uuid";
import {ItemDatabaseService} from "./database/item-database.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public itemsListSubject = new Subject<Item[]>();
  private itemsList: Item[] = [];

  constructor(private itemDatabaseService: ItemDatabaseService) {
    this.fetchItemsFromDB();
  }

  public getItemsList(): Item[] {
    this.fetchItemsFromDB();
    return this.itemsList;
  }

  public addItemToList(item: Item): void {
    this.itemsList.push(item);
    this.itemsListSubject.next(this.itemsList.slice());
  }

  generateUUID(): string {
    return UUID.UUID().substr(-12);
  }

  public saveItemToDB(item: Item): void {
    // appending the id to the ITEM class
    Object.assign(item, {id: this.generateUUID()});
    this.itemDatabaseService.saveItem(item).subscribe(success => {
      console.log('Item Saved to DB successfully');
      this.addItemToList(item);
      this.itemsListSubject.next(this.itemsList);
    }, error => {
      console.log('Received error from DB: ' + error);
    });
  }

  public fetchItemsFromDB() {
    this.itemDatabaseService.fetchAllItems().subscribe((response: Item[]) => {
      this.itemsList = Object.values(response);
      this.itemsListSubject.next(this.itemsList);
      console.log("items fetched");
    });
  }

  public getItemWithId(id: string): Item {
    for (let item of this.itemsList) {
      if (item.id.localeCompare(id) == 0) {
        return item;
        console.log('Item found with ID: ' + id);
      }
    }
    console.log('Item NOT found with ID: ' + id);
    return null;
  }

  public hasItemWithId(id: string): boolean {
    return this.getItemWithId(id) ? true : false;
  }

}
