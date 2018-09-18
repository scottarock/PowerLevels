import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-power-level',
  templateUrl: './power-level.component.html',
  styleUrls: ['./power-level.component.css']
})
export class PowerLevelComponent implements OnInit, OnChanges {

  @Input() powerLevel;
  @Input() basePower;

  message: string = '';

  constructor() { }

  ngOnInit() {
    console.log('initialized')
    this.setMessage(this.powerLevel.multiplier * this.basePower);
  }

  ngOnChanges() {
    console.log('changed')
    this.setMessage(this.powerLevel.multiplier * this.basePower);
  }

  setMessage(power) {
    if ( power === 50000 ) {
      this.message = '"The One"';
    } else if ( power > 20000 ) {
      this.message = '"Superlative"'
    } else if ( power > 9000 ) {
      this.message = '"Over 9000!"'
    } else {
      this.message = ''
    }
  }

}
