import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
items: Item[] = [
  new Item('Yellow Jacket', 150, 2, 'https://www.google.com/aclk?sa=l&ai=DChcSEwjujYG60NDfAhUZhMgKHckSC2cYABALGgJxdQ&sig=AOD64_0hCI6h27GZMA-IPwUtbNoxJ6Fqlg&ctype=5&q=&ved=0ahUKEwipjPy50NDfAhXlUt8KHVWqAM8Qwg8IZA&adurl='),
  new Item('Gucci Bloom Eau de Parfum', 126, 3, 'hhttps://upload.wikimedia.org/wikipedia/commons/e/ef/Perfume_bottle_MET_193599.jpg'),
]

  constructor() { }

  ngOnInit() {
  }

}
