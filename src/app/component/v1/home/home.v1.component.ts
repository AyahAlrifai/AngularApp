import { INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS } from '@angular/cdk/a11y';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import {SelectionModel} from '@angular/cdk/collections';

interface Site {
  name: string;
  siteId: number;
  children?: Site[];
}

interface SiteNode {
  expandable: boolean;
  name: string;
  level: number;
  siteId: number;
}

@Component({
  selector: 'home-v1',
  templateUrl: './home.v1.component.html',
  styleUrls: ['./home.v1.component.css']
})
export class HomeV1 {

  public treeControl = new FlatTreeControl<SiteNode>(node => node.level, node => node.expandable);
  public treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);
  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);;
  public checklistSelection = new SelectionModel<SiteNode>(true);

  constructor() {
    this.fillData();
  }

  fillData() {
    this.dataSource.data = [
      {
        name: 'A',
        siteId: 0,
        children: [{ name: 'AA', siteId: 1 },{ name: 'AB', siteId: 2 },{name: 'AC', siteId: 3, children: [{ name: 'AA', siteId: 1 }, { name: 'AB', siteId: 2 }, { name: 'AC', siteId: 3, children: [{ name: 'AA', siteId: 1 }, { name: 'AB', siteId: 2, children: [{ name: 'AA', siteId: 1 }, { name: 'AB', siteId: 2 }, { name: 'AC', siteId: 3 }] }, { name: 'AC', siteId: 3 }] }]}]
      },
      {
        siteId: 4,
        name: 'B',
        children: [{ siteId: 5, name: 'BA', children: [{ name: 'BAA', siteId: 6 }, { name: 'BAB', siteId: 7 }] },{ siteId: 8, name: 'BB', children: [{ name: 'BBA', siteId: 9 }, { name: 'BBB', siteId: 10 }] }]
      }
    ];
  }

  transformer(node: Site, level: number) {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      siteId: node.siteId,
      level: level,
    };
  };

  hasChild(_: number, node: SiteNode) {
    return node.expandable;
  }

  descendantsAllSelected(node: SiteNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    return descAllSelected;
  }
}
