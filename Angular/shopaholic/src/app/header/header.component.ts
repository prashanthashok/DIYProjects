import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  linkClicked(linkName: string){
    this.featureSelected.emit(linkName);
  }
}