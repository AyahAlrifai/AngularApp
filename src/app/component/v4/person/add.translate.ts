import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";

@Injectable()
export class AddTranslateService {

    input: string[] = [
        "add-person.message1",
        "add-person.message2",
        "add-person.message3"
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