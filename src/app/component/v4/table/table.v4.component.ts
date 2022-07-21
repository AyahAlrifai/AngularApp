import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { AppServiceV2, Person } from '../../../services/v2.service';
import { DeletePersonV4Dialog } from './deletePerson.v4.dialog';
import { TableTranslateService } from './table.translate';

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
  messages:any;

  constructor(public appService: AppServiceV2,public dialog: MatDialog,private _snackBar: MatSnackBar,private translate: TranslateService,private tableTranslateService:  TableTranslateService) {
    tableTranslateService.getObservable().subscribe((txt:any)=>{      
      this.messages=txt;
    });
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
        this.openSnackBar(this.messages["table.message1"],this.messages["table.message2"])
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

