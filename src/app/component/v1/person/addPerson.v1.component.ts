import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppServiceV1, Person } from '../../../services/v1.service';

@Component({
  selector: 'app-root',
  templateUrl: './addPerson.v1.component.html',
  styleUrls: ['./addPerson.v1.component.css']
})
export class AddPersonV1 implements OnInit,OnDestroy {
  inputs:Person [] = [];
  appSubscription: Subscription = new Subscription;

  constructor(private appService : AppServiceV1) {
    
  }

  ngOnInit() {
    this.inputs = this.appService.getPersons();
    this.appSubscription = this.appService.appUpdated.subscribe(() => {
      this.inputs = this.appService.getPersons();
    });
  }

  onAddNewPerson(form: any) {
    if(form.valid) {
      this.appService.addPerson({
        "name":form.value.name,
        "age":form.value.age,
        "gender":form.value.gender
      });
    } else {
      alert("please enter all required values")
    }
    form.reset();
  }

  ngOnDestroy() {
    this.appSubscription.unsubscribe();
  }

  isEmpty() {
    return this.appService.isEmpty();
  }

}

