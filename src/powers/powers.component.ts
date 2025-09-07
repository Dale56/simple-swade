import { Component, ViewChildren, QueryList } from '@angular/core';
import { PowerRowComponent } from "../app/power-row/power-row.component";
import { NgFor, NgIf } from '@angular/common';

interface Powers {
  [key: string]: {
    pp: string;
    range: string;
    duration: string;
    effect: string;
  }
}

@Component({
  selector: 'app-powers',
  imports: [PowerRowComponent, NgFor, NgIf],
  templateUrl: './powers.component.html',
  styleUrl: './powers.component.css'
})
export class PowersComponent {
  powerLines = Array(6);
  powerJSON = {} as Powers;
  @ViewChildren(PowerRowComponent) powerRows!: QueryList<PowerRowComponent>;

  addPower() {
    this.powerLines.push("");
  }

  removePower() {
    if (this.powerLines.length > 6) {
      this.powerLines.pop();
    }
  }

  saveStuff() {
  const newPowerJSON: Powers = {};
  this.powerRows.forEach(row => {
    const currentPower = row.getPower();
    if (currentPower && currentPower[0].trim() !== "") {
      const powerName = currentPower[0];
      newPowerJSON[powerName] = {
        pp: currentPower[1],
        range: currentPower[2],
        duration: currentPower[3],
        effect: currentPower[4]
      };
    }
  });
  this.powerJSON = newPowerJSON;
  console.log("power:", JSON.stringify(this.powerJSON));
}

}

