import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { AppServiceV2, Person } from '../../../services/v2.service';

@Component({
  selector: 'mat-app-table',
  templateUrl: './table.v2.component.html',
  styleUrls: ['./table.v2.component.css']
})
export class TableV2 implements OnInit {

  @Input() inputs: Person[] =[];

  constructor(private appService: AppServiceV2) {
  }

  ngOnInit() {
  }

  onDeletePerson(i:number) {
    this.appService.deletePerson(i);
  }

}

