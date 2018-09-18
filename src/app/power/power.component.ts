import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  basePower: number = 1;

  calculate(): void {
    console.log(this.basePower);
  }

  constructor() { }

  ngOnInit() {
  }

}
