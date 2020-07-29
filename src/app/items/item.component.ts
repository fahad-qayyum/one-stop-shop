import {Component, OnInit} from '@angular/core';
import {ItemService} from "../shared/services/item/item.service";
import {Item} from "./item.model";

@Component({
  selector: 'app-items-list',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

}
