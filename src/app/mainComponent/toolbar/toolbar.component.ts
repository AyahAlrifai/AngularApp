import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../nav/nav.component';
import {TranslateService} from "@ngx-translate/core";

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
  languageIsChecked = false;

  constructor(private translate: TranslateService) {  
    let lang =   localStorage.getItem("lang");
    if(lang === null || lang === undefined || lang === "" || lang ==="en") {
      this.languageIsChecked = false;
    } else if(lang === "ar") {
      this.languageIsChecked = true;
    }
  }
  
  onChangeLang() {
    if(!this.languageIsChecked) {
      localStorage.setItem("lang","en");
    } else {
      localStorage.setItem("lang","ar");
    }
    location.reload();
  }

  toggleDrawer() {
    this.toggleDrawerEvent.emit();
  }

  setSelectedMenu(i : String) {
    this.setSelectedMenuEvent.emit(i);
  }
}

