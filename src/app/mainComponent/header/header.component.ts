import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../nav/nav.component';

@Component({
  selector: 'nav-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header {
  @Input() selectedMenu: number = 0;
  @Input() list : Item[]=[];
  @Output() closeSidebarEvent = new EventEmitter<void>();
  @Output() setSelectedMenuEvent = new EventEmitter<String>();


  closeSidebar() {
    this.closeSidebarEvent.emit();
  }

  setSelectedMenu(i : String) {
    this.setSelectedMenuEvent.emit(i);
  }
}

