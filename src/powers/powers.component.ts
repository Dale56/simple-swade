import { Component } from '@angular/core';
import { PowerRowComponent } from "../app/power-row/power-row.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-powers',
  imports: [PowerRowComponent, NgFor, NgIf],
  templateUrl: './powers.component.html',
  styleUrl: './powers.component.css'
})
export class PowersComponent {
  powerLines = Array(6).fill(1).map((x,i)=>i+1); 

  addPower() {
    this.powerLines.push(1)
  }

  removePower() {
    if (this.powerLines.length > 6) {
      this.powerLines.pop();
    }
  }

  saveStuff() {
    
  }
}

