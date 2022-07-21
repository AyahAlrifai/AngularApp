import {Component, ViewChild} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'expansionPanel.component.html',
  styleUrls: ['expansionPanel.component.css'],
})
export class ExpansionPanel {
  @ViewChild("SecondAccordion")
  accordion!: MatAccordion;
  step = -1;

  constructor(private translate: TranslateService) {

  }


  setStep(index: number) {    
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}