import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AppServiceV2, Person } from '../../../services/v2.service';
import { AddPersonV4Dialog } from './addPerson.v4.dialog';

@Component({
  templateUrl: './addPerson.v4.component.html',
  styleUrls: ['./addPerson.v4.component.css']
})
export class AddPersonV4 implements OnInit, OnDestroy {
  inputs: Person[] = [];

  appSubscription: Subscription = new Subscription;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(private appService: AppServiceV2,public dialog: MatDialog,private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.inputs = this.appService.getPersons();
    this.appSubscription = this.appService.appUpdated.subscribe(() => {
      this.inputs = this.appService.getPersons();
    });
  }

  ngOnDestroy() {
    this.appSubscription.unsubscribe();
  }

  isEmpty() {
    return this.appService.isEmpty();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPersonV4Dialog, {
      width: '70%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== null && result !== "") {
        let date = result.birthdate.toLocaleDateString().split("T")[0];
        this.appService.addPerson({...result,birthdate:date});
        this.openSnackBar("person added","successfully");
 
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
}

