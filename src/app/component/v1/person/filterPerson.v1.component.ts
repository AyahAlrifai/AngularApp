import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppServiceV1, Person } from '../../../services/v1.service';

@Component({
  selector: 'app-root',
  templateUrl: './filterPerson.v1.component.html',
  styleUrls: ['./filterPerson.v1.component.css']
})
export class FilterPersonV1 implements OnInit,OnDestroy {
  inputs: Person[] = [];
  appSubscription: Subscription = new Subscription;

  constructor(private appService : AppServiceV1) {
    
  }

  ngOnInit() {
    this.inputs = this.appService.getPersons();
    this.appSubscription = this.appService.appUpdated.subscribe(() => {
      this.inputs = this.appService.getPersons();
    });
  }

  onFilterPersons(form: any) {
    this.inputs = this.appService.filterInputs(form.value);
  }

  ngOnDestroy() {
    this.appSubscription.unsubscribe();
  }

  isEmpty() {
    return this.appService.isEmpty();
  }

  onResetForm() {
    this.inputs = this.appService.getPersons();
  }
}

