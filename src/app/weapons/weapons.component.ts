import { Component } from '@angular/core';
import { WeaponRowComponent } from "../weapon-row/weapon-row.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-weapons',
  imports: [WeaponRowComponent, NgFor, NgIf],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent {
  weaponLines = Array(6).fill(1).map((x,i)=>i+1); 

 addWeapon() {
  this.weaponLines.push(1);
 } 

 removeWeapon() {
  if( this.weaponLines.length > 6) {
    this.weaponLines.pop();
  }
 }

}

