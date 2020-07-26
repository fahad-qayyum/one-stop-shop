import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "./item.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ItemDatabaseService {

  constructor(private httpClient: HttpClient) {
  }

  saveItem(item: Item): Observable<any> {
    return this.httpClient.post<Item>('https://one-stop-shop-974de.firebaseio.com/item.json', item);
  }

  fetchAllItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>('https://one-stop-shop-974de.firebaseio.com/item.json');
  }
}
