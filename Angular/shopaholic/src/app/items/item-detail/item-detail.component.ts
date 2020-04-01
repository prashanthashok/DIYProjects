import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  constructor() { }
@Input() item: Item;
  ngOnInit() {
  }

}
