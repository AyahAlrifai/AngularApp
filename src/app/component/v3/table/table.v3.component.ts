import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppServiceV2, Person } from '../../../services/v2.service';
import { DeletePersonV3Dialog } from './deletePerson.v3.dialog';

@Component({
  selector: 'mat-app-tablev3',
  templateUrl: './table.v3.component.html',
  styleUrls: ['./table.v3.component.css']
})
export class TableV3 implements OnInit {

  @Input() inputs: Person[] = [];

  constructor(private appService: AppServiceV2,public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onDeletePerson(i:number) {
    const dialogRef = this.dialog.open(DeletePersonV3Dialog, {
      width: '40%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.appService.deletePerson(i);
      }
    });
  }

}

