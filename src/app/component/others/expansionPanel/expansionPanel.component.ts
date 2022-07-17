import {Component, ViewChild} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  templateUrl: 'expansionPanel.component.html',
  styleUrls: ['expansionPanel.component.css'],
})
export class ExpansionPanel {
  @ViewChild("SecondAccordion")
  accordion!: MatAccordion;
  step = -1;

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