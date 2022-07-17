import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AppServiceV2, Person } from '../../../services/v2.service';
import { AddPersonV3Dialog } from './addPerson.v3.dialog';

@Component({
  templateUrl: './addPerson.v3.component.html',
  styleUrls: ['./addPerson.v3.component.css']
})
export class AddPersonV3 implements OnInit, OnDestroy {
  inputs: Person[] = [];

  appSubscription: Subscription = new Subscription;

  constructor(private appService: AppServiceV2,public dialog: MatDialog) {

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
    const dialogRef = this.dialog.open(AddPersonV3Dialog, {
      width: '70%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== null && result !== "") {
        let date = result.birthdate.toLocaleDateString().split("T")[0];
        this.appService.addPerson({...result,birthdate:date});
      }
    });
  }
}

