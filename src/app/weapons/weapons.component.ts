import { Component, QueryList, ViewChildren } from '@angular/core';
import { WeaponRowComponent } from "../weapon-row/weapon-row.component";
import { NgFor, NgIf } from '@angular/common';

interface Weapons {
  [key:string]: {
    range: string;
    damage: string;
    ap: string;
    rof: string;
    wt: string;
    notes: string;
  }
}

@Component({
  selector: 'app-weapons',
  imports: [WeaponRowComponent, NgFor, NgIf],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent {
  weaponLines = Array(6).fill(""); 
  weaponJSON = {} as Weapons;
  @ViewChildren(WeaponRowComponent) weaponRows!: QueryList<WeaponRowComponent>;

 addWeapon() {
  this.weaponLines.push("");
 } 

 removeWeapon() {
  if( this.weaponLines.length > 6) {
    this.weaponLines.pop();
  }
 }

saveStuff() {
  const newPowerJSON: Weapons = {};
  this.weaponRows.forEach(row => {
    const currentPower = row.getWeapon();
    if (currentPower && currentPower[0].trim() !== "") {
      const powerName = currentPower[0];
      newPowerJSON[powerName] = {
        range: currentPower[1],
        damage: currentPower[2],
        ap: currentPower[3],
        rof: currentPower[4],
        wt: currentPower[5],
        notes: currentPower[6]
      };
    }
  });
  this.weaponJSON = newPowerJSON;
  return this.weaponJSON;
}
}

