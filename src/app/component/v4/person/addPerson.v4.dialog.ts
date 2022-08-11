import { Component, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import { AddPersonV4 } from "./addPerson.v4.component";
import { DialogTranslateService } from "./dialog.translate";

@Component({
    templateUrl: './addPerson.v4.dialog.html',
    styleUrls: ['./addPerson.v4.dialog.css']
})
export class AddPersonV4Dialog {

    options: FormGroup;
    name = new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]);
    age = new FormControl('', [Validators.required, Validators.max(100), Validators.min(18)]);
    gender = new FormControl('Male', [Validators.required]);
    birthdate = new FormControl(new Date(0, 0, 0));

    invalid: Boolean = false;

    messages: any;
    constructor(fb: FormBuilder,
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private translate: TranslateService,
        private dialogTranslateService: DialogTranslateService) {

        this.birthdate = new FormControl(new Date());
        this.options = fb.group({
            name: this.name,
            age: this.age,
            gender: this.gender,
            birthdate: this.birthdate,
        });
        dialogTranslateService.getObservable().subscribe((txt: any) => {
            this.messages = txt;
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
            return this.messages["person-dialog.message1"];
        } else if (this.name.hasError('maxlength') || this.name.hasError('minlength')) {
            return this.messages["person-dialog.message2"];
        }
        return "";
    }

    getAgeErrorMessage() {

        if (this.age.hasError("required")) {
            return this.messages["person-dialog.message3"];
        } else if (this.age.hasError('max') || this.age.hasError('min')) {
            return this.messages["person-dialog.message4"];
        }
        return "";
    }

    getGenderErrorMessage() {
        if (this.name.hasError("required")) {
            return this.messages["person-dialog.message5"];
        }
        return "";
    }
}