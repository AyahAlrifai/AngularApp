import { Component, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AddPersonV3 } from "./addPerson.v3.component";

@Component({
    templateUrl: './addPerson.v3.dialog.html',
    styleUrls: ['./addPerson.v3.dialog.css']
})
export class AddPersonV3Dialog {

    options: FormGroup;
    name = new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]);
    age = new FormControl('', [Validators.required, Validators.max(100), Validators.min(18)]);
    gender = new FormControl('Male', [Validators.required]);
    birthdate = new FormControl(new Date(0, 0, 0));

    invalid: Boolean =false;

    constructor(fb: FormBuilder, public dialogRef: MatDialogRef<AddPersonV3>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

        this.birthdate = new FormControl(new Date());
        this.options = fb.group({
            name: this.name,
            age: this.age,
            gender: this.gender,
            birthdate: this.birthdate,
        });
    }

    submitForm() {
        if (this.options.valid) {
            this.dialogRef.close(this.options.value);
        } else {
            this.invalid = true;
        }
    }

    getNameErrorMessage() {        
        if (this.name.hasError("required")) {
            return "you must enter a value";
        } else if( this.name.hasError('maxlength') || this.name.hasError('minlength') ) {
            return "length should be between 1-50";
        }
        return "";
    }

    getAgeErrorMessage() {

        if (this.age.hasError("required")) {
            return "you must enter a value";
        } else if (this.age.hasError('max') || this.age.hasError('min')) {
            return "age should be between 18-100";
        }
        return "";
    }

    getGenderErrorMessage() {
        if (this.name.hasError("required")) {
            return "you must enter a value"
        }
        return "";
    }
}