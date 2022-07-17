import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../nav/nav.component';

@Component({
  selector: 'nav-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class Toolbar {

  @Input() selectedMenu: number=0;
  @Input() list : Item[]=[];
  @Output() toggleDrawerEvent = new EventEmitter<void>();
  @Output() setSelectedMenuEvent = new EventEmitter<String>();

  toggleDrawer() {
    this.toggleDrawerEvent.emit();
  }

  setSelectedMenu(i : String) {
    this.setSelectedMenuEvent.emit(i);
  }
}

