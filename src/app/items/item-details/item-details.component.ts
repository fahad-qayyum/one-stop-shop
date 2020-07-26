import {Component, OnInit} from '@angular/core';
import {Item} from "../item.model";
import {ActivatedRoute, Params} from "@angular/router";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item: Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (this.itemService.hasItemWithId(params['id'])) {
        this.item = this.itemService.getItemWithId(params['id']);
      }
    })
  }


}
