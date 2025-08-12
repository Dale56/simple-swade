import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, viewChildren } from '@angular/core';
import { CustomInputBoxComponent } from "../custom-input-box/custom-input-box.component";
import { NgFor, NgForOf } from '@angular/common';
import { CustomInputBoxUnderlineComponent } from "../custom-input-box-underline/custom-input-box-underline.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-stats',
  imports: [CustomInputBoxComponent, NgForOf, FormsModule],
  templateUrl: './name-stats.component.html',
  styleUrl: './name-stats.component.css'
})
export class NameStatsComponent {
  statsToShow = ['Name', 'Race', 'Description', 'Bennies'];

  woundsStates = [false, false, false]
  fatigueStates = [false, false]

  validateWound(num: number) {
    for (let i = 0; i < this.woundsStates.length; i++) {
      if (i != num) {
        this.woundsStates[i] = false;
      } else {
        this.woundsStates[i] = true;
      }
    }
  }
  validateFatigue(num: number) {
    for (let i = 0; i < this.fatigueStates.length; i++) {
      if (i != num) {
        this.fatigueStates[i] = false;
      } else {
        this.fatigueStates[i] = true;
      }
    }
  }
}

