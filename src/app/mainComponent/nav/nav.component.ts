import { Component } from '@angular/core';

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

  v1SubItems: Item[] = [{ Order: 1, Title: 'add Person v1', Rout: '/v1/add', SubItem: [] }, { Order: 2, Title: 'filter Persons v1', Rout: '/v1/filter', SubItem: [] }];
  v2SubItems: Item[] = [{ Order: 1, Title: 'add Person v2', Rout: '/v2/add', SubItem: [] }, { Order: 2, Title: 'filter Persons v2', Rout: '/v2/filter', SubItem: [] }];
  v3SubItems: Item[] = [{ Order: 1, Title: 'add Person v3', Rout: '/v3/add', SubItem: [] }];
  v4SubItems: Item[] = [{ Order: 1, Title: 'add Person v4', Rout: '/v4/add', SubItem: [] }, { Order: 2, Title: 'filter Persons v4', Rout: '/v4/filter', SubItem: [] }];
  otherSubItems: Item[] = [{ Order: 1, Title: 'Some Materials', Rout: '/other/home', SubItem: [] }, { Order: 2, Title: 'button', Rout: '/other/button', SubItem: [] }, { Order: 3, Title: 'Grid', Rout: '/other/grid', SubItem: [] }, { Order: 4, Title: 'expansion Panel', Rout: '/other/expansionPanel', SubItem: [] }];

  list: Item[] = [
    { Order: 1, Title: 'version 1', Rout: '/v1/home', SubItem: this.v1SubItems },
    { Order: 2, Title: 'version 2', Rout: '/v2/home', SubItem: this.v2SubItems },
    { Order: 3, Title: 'version 3', Rout: '/v3/home', SubItem: this.v3SubItems },
    { Order: 4, Title: 'version 4', Rout: '/v4/home', SubItem: this.v4SubItems },
    { Order: 5, Title: 'Others', Rout: '/other/home', SubItem: this.otherSubItems }
  ];

  selectedMenu = 0;
  selectedSubMenu = 0;

  constructor() {
    let pathName = window.location.pathname;
    console.log(pathName)
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
  }

}

