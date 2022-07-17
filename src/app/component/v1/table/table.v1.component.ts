import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { AppServiceV1 } from '../../../services/v1.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.v1.component.html',
  styleUrls: ['./table.v1.component.css']
})
export class TableV1 implements OnInit {

  @Input() name: String = "";
  @Input() age: String = "";
  @Input() gender: String = "";
  @Input() index: number = 0;

  @Output() deletePerson = new EventEmitter();

  constructor(private appService: AppServiceV1) {
  }

  ngOnInit() {
  }

  onDeletePerson() {
    this.appService.deletePerson(this.index);
  }

}

