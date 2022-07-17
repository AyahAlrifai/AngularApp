import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'home-other',
  templateUrl: './home.other.component.html',
  styleUrls: ['./home.other.component.css']
})
export class HomeOther {
  @ViewChild("secondSpinner")
  secondSpinner:any;

  spinnerValue:number = 0;

  interval:any;

  constructor() {
    
  }

  startLoad() {
    this.spinnerValue= this.spinnerValue<100? this.spinnerValue:0;
    this.secondSpinner.value=this.secondSpinner.value<100? this.secondSpinner.value:0;
    this.interval = setInterval(()=>{
      if(this.secondSpinner.value === 100) {
        clearInterval(this.interval);
      } else {
        this.spinnerValue=this.secondSpinner.value+1;
      }
    }, 100);
  }

  stopLoad() {
    clearInterval(this.interval);
  }
}

