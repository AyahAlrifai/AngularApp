import { INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS } from '@angular/cdk/a11y';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';

interface Site {
  name: string;
  siteId: number;
  code:string;
  type:number;
  children?: Site[];
}

interface SiteNode {
  expandable: boolean;
  name: string;
  code:string;
  type:number;
  level: number;
  siteId: number;
}

@Component({
  selector: 'home-v1',
  templateUrl: './home.v1.component.html',
  styleUrls: ['./home.v1.component.css']
})
export class HomeV1 {

  public selectedSites:any[]=[];

  public treeControl = new FlatTreeControl<SiteNode>(node => node.level, node => node.expandable);
  public treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);
  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);;
  public checklistSelection = new SelectionModel<SiteNode>(true);

  constructor() {
    this.fillData();
  }

  fillData() {
    this.dataSource.data = [
      {name: 'A', siteId: 0,code:"a1221",type:5, children: [
          { name: 'B', siteId: 1,code:"a1221",type:5 },
          {name: 'C', siteId: 2,code:"a1221",type:5, children: [
              { name: 'D', siteId: 3 ,code:"a1221",type:5},
              { name: 'E', siteId: 4 ,code:"a1221",type:5},
              {name: 'F', siteId: 5,code:"a1221",type:5, children: [
                  { name: 'G', siteId: 6 ,code:"a1221",type:5},
                  {name: 'H', siteId: 7,code:"a1221",type:5, children: [
                      { name: 'I', siteId: 8 ,code:"a1221",type:5},
                      { name: 'G', siteId: 9 ,code:"a1221",type:5},
                      { name: 'K', siteId: 10 ,code:"a1221",type:5}]
                  },
                  { name: 'L', siteId: 11,code:"a1221",type:5 }
                ]
              }
            ]
          },
          {
            name: 'M', siteId: 12,code:"a1221",type:5, children: [
              { name: 'N', siteId: 13,code:"a1221",type:5 },
              { name: 'P', siteId: 14,code:"a1221",type:5 },
              {name: 'Q', siteId: 15,code:"a1221",type:5, children: [
                  { name: 'R', siteId: 16,code:"a1221",type:5 },
                  {name: 'S', siteId: 17,code:"a1221",type:5, children: [
                      { name: 'T', siteId: 18,code:"a1221",type:5 },
                      { name: 'U', siteId: 19 ,code:"a1221",type:5},
                      { name: 'V', siteId: 20 ,code:"a1221",type:5}
                    ]
                  },
                  { name: 'W', siteId: 21,code:"a1221",type:5 },
                  { name: 'X', siteId: 22,code:"a1221",type:5 },
                  { name: 'Y', siteId: 23,code:"a1221",type:5 },
                  { name: 'Z', siteId: 24,code:"a1221",type:5 }
                ]
              }
            ]
          }
        ]
      }
      ,
      {siteId: 25,name: 'A1',code:"a1221",type:5,children: [
          {siteId: 26, name: 'B1',code:"a1221",type:5, children: [
              { name: 'C1', siteId: 27,code:"a1221",type:5 },
              { name: 'D1', siteId: 28,code:"a1221",type:5 }
            ]
          },
          {siteId: 29, name: 'E1',code:"a1221",type:5, children: [
              { name: 'F1', siteId: 30,code:"a1221",type:5 },
              { name: 'G1', siteId: 31,code:"a1221",type:5 }
            ]
          }
        ]
      }
    ];
  }

  transformer(node: Site, level: number) {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      siteId: node.siteId,
      code: node.code,
      type:node.type,
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

  descendantsPartiallySelected(node: SiteNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  todoItemSelectionToggle(node: SiteNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  checkAllParentsSelection(node: SiteNode): void {
    let parent: SiteNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  getParentNode(node: SiteNode): SiteNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  getLevel(node: SiteNode) {
    return node.level;
  }

  checkRootNodeSelection(node: SiteNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  siteLeafItemSelectionToggle(node: SiteNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  submit() {
    this.selectedSites = this.checklistSelection.selected
  }
}
