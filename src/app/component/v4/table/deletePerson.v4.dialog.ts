import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TableV4 } from "./table.v4.component";

@Component({
    templateUrl: './deletePerson.v4.dialog.html',
})
export class DeletePersonV4Dialog {

    constructor(public dialogRef: MatDialogRef<TableV4>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }
}