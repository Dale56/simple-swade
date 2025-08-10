import { Component } from '@angular/core';
import { WeaponRowComponent } from "../weapon-row/weapon-row.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-weapons',
  imports: [WeaponRowComponent, NgFor],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent {
  weaponLines = Array(7).fill(1).map((x,i)=>i+1); 
}
