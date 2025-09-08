import { Component } from '@angular/core';
import { NgForOf } from "../../../node_modules/@angular/common/common_module.d-C8_X2MOZ";
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-weapon-row',
  imports: [FormsModule, NgFor],
  templateUrl: './weapon-row.component.html',
  styleUrl: './weapon-row.component.css'
})
export class WeaponRowComponent {
  trackByIndex(index: number, item: string) {
    return index;
  }

  weaponContents = Array(7).fill("");

  getWeapon() {
    return this.weaponContents;
  }
}
