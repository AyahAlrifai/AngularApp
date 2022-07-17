import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Subscription } from 'rxjs';
import { AppServiceV2, Person } from '../../../services/v2.service';

@Component({
  selector: 'mat-app-root',
  templateUrl: './addPerson.v2.component.html',
  styleUrls: ['./addPerson.v2.component.css']
})
export class AddPersonV2 implements OnInit, OnDestroy {
  inputs: Person[] = [];

  options: FormGroup;
  name = new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]);
  age = new FormControl('', [Validators.required, Validators.max(100), Validators.min(18)]);
  gender = new FormControl('Male', [Validators.required]);
  birthdate = new FormControl(new Date(0, 0, 0));

  appSubscription: Subscription = new Subscription;

  constructor(private appService: AppServiceV2, fb: FormBuilder) {
    this.birthdate = new FormControl(new Date());

    this.options = fb.group({
      name: this.name,
      age: this.age,
      gender: this.gender,
      birthdate: this.birthdate,
    });
  }

  ngOnInit() {
    this.inputs = this.appService.getPersons();
    this.appSubscription = this.appService.appUpdated.subscribe(() => {
      this.inputs = this.appService.getPersons();
    });
  }

  onAddNewPerson() {
    if (this.options.valid) {
      let date = this.options.value.birthdate.toLocaleDateString().split("T")[0];
      this.appService.addPerson({...this.options.value,birthdate:date});
    }
  }

  ngOnDestroy() {
    this.appSubscription.unsubscribe();
  }

  isEmpty() {
    return this.appService.isEmpty();
  }

  getNameErrorMessage() {
    if (this.name.hasError("required")) {
      return "you must enter a value"
    }
    return this.name.hasError('maxlength') || this.name.hasError('minlength') ? "length should be between 1-50" : "";
  }

  getAgeErrorMessage() {
    if (this.age.hasError("required")) {
      return "you must enter a value"
    }
    return this.age.hasError('max') || this.age.hasError('min') ? "age should be between 18-100" : "";
  }

  getGenderErrorMessage() {
    if (this.name.hasError("required")) {
      return "you must enter a value"
    }
    return "";
  }
}

