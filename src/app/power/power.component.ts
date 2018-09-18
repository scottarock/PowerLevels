import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  powerInput: number = 1;
  basePower: number = 1;
  powerLevels = [
    { type: 'Human', multiplier: 1 },
    { type: 'Saiyan', multiplier: 10 },
    { type: 'SuperSaiyan', multiplier: 90 },
    { type: 'SuperSaiyanTwo', multiplier: 150 },
    { type: 'SuperSaiyanThree', multiplier: 250 },
    { type: 'SuperSaiyanFour', multiplier: 500 }
  ];

  calculate(): void {
    this.basePower = this.powerInput;
  }

  constructor() { }

  ngOnInit() {
  }

}
