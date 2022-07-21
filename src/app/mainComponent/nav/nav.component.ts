import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavTranslateService } from './nav.translate';

export interface Item {
  Order: number,
  Title: String,
  Rout: String,
  SubItem: Item[],
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class Nav {

  v1SubItems: Item[] = [];
  v2SubItems: Item[] = [];
  v3SubItems: Item[] = [];
  v4SubItems: Item[] = [];
  otherSubItems: Item[] = [];

  list: Item[] = [
  ];

  selectedMenu = 0;
  selectedSubMenu = 0;
  messages:any;

  constructor(private translate: TranslateService,private navTranslateService:  NavTranslateService) {
    navTranslateService.getObservable().subscribe((txt:any)=>{      
      this.messages=txt;
      this.init();
    });
  }

  init() {
    this.v1SubItems = [{ Order: 1, Title: this.messages["nav.message1"], Rout: '/v1/add', SubItem: [] }, { Order: 2, Title: this.messages['nav.message6'], Rout: '/v1/filter', SubItem: [] }];
      this.v2SubItems = [{ Order: 1, Title: this.messages["nav.message2"], Rout: '/v2/add', SubItem: [] }, { Order: 2, Title: this.messages['nav.message7'], Rout: '/v2/filter', SubItem: [] }];
      this.v3SubItems = [{ Order: 1, Title: this.messages["nav.message3"], Rout: '/v3/add', SubItem: [] }];
      this.v4SubItems = [{ Order: 1, Title: this.messages["nav.message4"], Rout: '/v4/add', SubItem: [] }, { Order: 2, Title:this.messages['nav.message8'], Rout: '/v4/filter', SubItem: [] }];
      this.otherSubItems = [{ Order: 1, Title: this.messages['nav.message5'], Rout: '/other/home', SubItem: [] }, { Order: 2, Title: this.messages['nav.message9'], Rout: '/other/button', SubItem: [] }, { Order: 3, Title: this.messages['nav.message10'], Rout: '/other/grid', SubItem: [] }, { Order: 4, Title: this.messages['nav.message11'], Rout: '/other/expansionPanel', SubItem: [] }];

      this.list = [
        { Order: 1, Title: this.messages['nav.message12'], Rout: '/v1/home', SubItem: this.v1SubItems },
        { Order: 2, Title: this.messages['nav.message13'], Rout: '/v2/home', SubItem: this.v2SubItems },
        { Order: 3, Title: this.messages['nav.message14'], Rout: '/v3/home', SubItem: this.v3SubItems },
        { Order: 4, Title: this.messages['nav.message15'], Rout: '/v4/home', SubItem: this.v4SubItems },
        { Order: 5, Title: this.messages['nav.message16'], Rout: '/other/home', SubItem: this.otherSubItems }
      ];
      let pathName = window.location.pathname;
      this.setSelectedMenuItem(pathName);
  }

  

  setSelectedMenuItem(rout: String) {
    this.selectedSubMenu = 0;
    outer:
    for (let li of this.list) {
      if (rout.split("/")[1] == li.Rout.split("/")[1]) {
        this.selectedMenu = li.Order;
        for (let subli of li.SubItem) {
          if (rout === subli.Rout) {
            this.selectedSubMenu = subli.Order;
            break outer;
          }
        }
      }
    }
    console.log(this.selectedMenu);
    
    console.log(this.selectedSubMenu);
    
  }

}

