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
  gearLines = Array(14).fill("");

  trackByIndex(index: number, item: string) {
    return index;
  }

  saveStuff() {
    console.log(this.gearLines);
  }
}
