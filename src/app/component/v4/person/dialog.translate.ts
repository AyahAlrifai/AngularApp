import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";

@Injectable()
export class DialogTranslateService {

    input: string[] = [
        "person-dialog.message1",
        "person-dialog.message2",
        "person-dialog.message3",
        "person-dialog.message4",
        "person-dialog.message5",
        "person-dialog.message6",
        "person-dialog.message7",
        "person-dialog.message8",
        "person-dialog.message9",
        "person-dialog.message10",
        "person-dialog.message11",
        "person-dialog.message12",
        "person-dialog.message13",
        "person-dialog.message14",
        "person-dialog.message15",
        "person-dialog.message16",
        "person-dialog.message17",
        ];

    output: any;

    observable = new Observable((observer) => {
        this.translate.get(this.input).subscribe((txt: any) => {
            this.output=txt;
            console.log(this.output);
            observer.next(this.output);
            observer.complete();
        });
    });

    constructor(private translate: TranslateService) {
    }

    getObservable() {
        return this.observable;
    }

    getOutput() {
        return this.output;
    }
}