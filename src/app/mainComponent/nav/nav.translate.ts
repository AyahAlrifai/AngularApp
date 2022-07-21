import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";

@Injectable()
export class NavTranslateService {

    input: string[] = [
        "nav.message1",
        "nav.message2",
        "nav.message3",
        "nav.message4",
        "nav.message5",
        "nav.message6",
        "nav.message7",
        "nav.message8",
        "nav.message9",
        "nav.message10",
        "nav.message11",
        "nav.message12",
        "nav.message13",
        "nav.message14",
        "nav.message15",
        "nav.message16",
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