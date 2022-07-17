import { isNgTemplate } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../nav/nav.component';

@Component({
  selector: 'nav-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SideNav {
  @Input() item : Item={Order:0,Title:"",Rout:"",SubItem:[]};
  @Input() selectedSubMenu : number=0;
}

