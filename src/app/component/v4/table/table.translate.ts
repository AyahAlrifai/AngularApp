import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";

@Injectable()
export class TableTranslateService {

    input: string[] = [
        "table.message1",
        "table.message2",
        "table.message3",
        "table.message4",
        "table.message5",
        "table.message6",
        "table.message7",
        "table.message8",
        "table.message9"
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