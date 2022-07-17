import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { AppServiceV2, Person } from '../../../services/v2.service';
import { DeletePersonV4Dialog } from './deletePerson.v4.dialog';

@Component({
  selector: 'mat-app-tablev4',
  templateUrl: './table.v4.component.html',
  styleUrls: ['./table.v4.component.css']
})
export class TableV4 implements OnInit {

  @Input() showDeleteColumn: boolean = false;
  @Input() inputs : Person[] = [];

  @ViewChild("pageEvent")
  pageEvent!: PageEvent;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(public appService: AppServiceV2,public dialog: MatDialog,private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onDeletePerson(i:number) {
    const dialogRef = this.dialog.open(DeletePersonV4Dialog, {
      width: '40%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.appService.deletePerson(i);
        this.openSnackBar("person deleted","successfully")
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:3000,
    });
  }

  changePage() {
    //page or sizeofpage is changed
    console.log(this.pageEvent.pageSize);
    console.log(this.pageEvent.pageIndex);
    console.log(this.pageEvent.length);
    console.log(this.pageEvent.previousPageIndex);
  }
}

