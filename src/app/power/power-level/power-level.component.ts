import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-level',
  templateUrl: './power-level.component.html',
  styleUrls: ['./power-level.component.css']
})
export class PowerLevelComponent implements OnInit {

  @Input() powerLevel;
  @Input() basePower;

  constructor() { }

  ngOnInit() {
  }

}
