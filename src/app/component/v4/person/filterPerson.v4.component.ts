import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppServiceV2, Person } from '../../../services/v2.service';

@Component({
  selector: 'mat-app-root',
  templateUrl: './filterPerson.v4.component.html',
  styleUrls: ['./filterPerson.v4.component.css']
})
export class FilterPersonV4 implements OnInit,OnDestroy {
  inputs: Person[] = [];

  options: FormGroup;
  name = new FormControl('',[Validators.maxLength(50),Validators.minLength(1)]);
  age = new FormControl('',[Validators.max(100),Validators.min(18)]);
  gender = new FormControl('',[Validators.required]);
  birthdate = new FormControl();

  appSubscription: Subscription = new Subscription;

  constructor(private appService : AppServiceV2,fb: FormBuilder) {
    this.options = fb.group({
      name: this.name,
      age: this.age,
      gender: this.gender,
      birthdate: this.birthdate,
    });
  }

  ngOnInit() {
    this.appSubscription = this.appService.appUpdated.subscribe(() => {
      this.inputs = this.appService.getPersons();
    });
  }

  onFilterPersons() {
    let date =this.options.value.birthdate!==null ? this.options.value.birthdate.toLocaleDateString().split("T")[0] : "";
    this.inputs = this.appService.filterInputs({...this.options.value,birthdate:date});
  }

  ngOnDestroy() {
    this.appSubscription.unsubscribe();
  }

  isEmpty() {
    return this.appService.isEmpty();
  }

  onResetForm() {
    this.inputs = [];
  }

  getNameErrorMessage() { 
    return this.name.hasError('maxlength') || this.name.hasError('minlength')? "length should be between 1-50":"";
  }

  getAgeErrorMessage() {
    return this.age.hasError('max') || this.age.hasError('min')? "age should be between 18-100":"";
  }

  getGenderErrorMessage() {
    if(this.name.hasError("required")) {
      return "you must enter a value"
    }
    return "";
  }
}

