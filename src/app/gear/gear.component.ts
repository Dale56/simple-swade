import { Component, QueryList, ViewChildren} from '@angular/core';
import { CustomInputBoxUnderlineComponent } from "../custom-input-box-underline/custom-input-box-underline.component";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Gear {
  [key: string]: string;
}

@Component({
  selector: 'app-gear',
  imports: [CustomInputBoxUnderlineComponent, NgFor, FormsModule],
  templateUrl: './gear.component.html',
  styleUrl: './gear.component.css'
})

export class GearComponent{
  gearJSON: Gear = {};
  gearLines = Array(14).fill("");
  @ViewChildren(CustomInputBoxUnderlineComponent) gearLinesElements !: QueryList<CustomInputBoxUnderlineComponent>;

  trackByIndex(index: number, item: string) {
    return index;
  }

  saveStuff() {
    // this.updateGear();
    console.log(this.gearLines);
    for (let i = 0; i < this.gearLines.length; i++) {
      this.gearJSON[i] = this.gearLinesElements.get(i)?.content ?? "";
    }
    // send out gearlines instead of a dedicated json
  }
}
