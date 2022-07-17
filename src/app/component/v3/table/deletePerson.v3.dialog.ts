import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TableV3 } from "./table.v3.component";

@Component({
    templateUrl: './deletePerson.v3.dialog.html',
})
export class DeletePersonV3Dialog {

    constructor(public dialogRef: MatDialogRef<TableV3>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }
}