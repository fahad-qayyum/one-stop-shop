import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../item.service";
import {Item} from "../item.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent implements OnInit {

  newItemForm: FormGroup;

  constructor(private itemService: ItemService, private router: Router) {
  }

  ngOnInit(): void {
    this.newItemForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'subTitle': new FormControl(null, Validators.required),
      'price': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'imageSrc': new FormControl(null, Validators.required),
      'offeredBy': new FormControl(null, Validators.required),
      'description': new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  onSubmitForm() {
    console.log('item submitted');
    const item: Item = {
      id: this.itemService.generateUUID(),
      title: this.newItemForm.get('title').value,
      subTitle: this.newItemForm.get('subTitle').value,
      price: this.newItemForm.get('price').value,
      imageSrc: this.newItemForm.get('imageSrc').value,
      offeredBy: this.newItemForm.get('offeredBy').value,
      description: this.newItemForm.get('description').value
    };
    this.itemService.saveItemToDB(item);
    this.itemService.fetchItemsFromDB();
    this.onClear();
    this.router.navigate(['/items']);
  }

  onClear() {
    this.newItemForm.reset();
  }

  checkForControlErrors(control: string) {
    return this.newItemForm.get(control).errors && this.newItemForm.get(control).touched;
  }
}
