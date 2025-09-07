import { Component } from '@angular/core';
import { CustomInputBoxComponent } from "../custom-input-box/custom-input-box.component";
import { CustomInputBoxUnderlineComponent as CustomInputBoxUnderlineComponent } from "../custom-input-box-underline/custom-input-box-underline.component";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edges-etc',
  imports: [CustomInputBoxComponent, CustomInputBoxUnderlineComponent, NgFor, FormsModule],
  templateUrl: './edges-etc.component.html',
  styleUrl: './edges-etc.component.css'
})
export class EdgesEtcComponent {
  hindrances = Array(4).fill("");
  edges = Array(4).fill("");
  advances = Array(5).fill("");

  trackByIndex(index: number, item: string) {
    return index;
  }

  saveStuff() {
    console.log(this.hindrances);
    console.log(this.edges);
    console.log(this.advances);
  }
}
