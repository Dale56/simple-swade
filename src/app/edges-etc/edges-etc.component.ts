import { Component } from '@angular/core';
import { CustomInputBoxComponent } from "../custom-input-box/custom-input-box.component";
import { CustomInputBoxUnderlineComponent as CustomInputBoxUnderlineComponent } from "../custom-input-box-underline/custom-input-box-underline.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-edges-etc',
  imports: [CustomInputBoxComponent, CustomInputBoxUnderlineComponent, NgFor],
  templateUrl: './edges-etc.component.html',
  styleUrl: './edges-etc.component.css'
})
export class EdgesEtcComponent {
  hindrances = Array(4).fill(1).map((x,i)=>i+1);
  edges = Array(4).fill(1).map((x,i)=>i+1);
  advances = Array(5).fill(1).map((x,i)=>i+1);

  saveStuff() {
    alert('edges');
  }
}
