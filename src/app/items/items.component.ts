import {Component, OnInit} from '@angular/core';
import {ItemService} from "./item.service";
import {Item} from "./item.model";

@Component({
  selector: 'app-items-list',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

}
