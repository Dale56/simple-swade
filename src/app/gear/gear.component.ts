import { Component } from '@angular/core';
import { CustomInputBoxUnderlineComponent } from "../custom-input-box-underline/custom-input-box-underline.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gear',
  imports: [CustomInputBoxUnderlineComponent, NgFor],
  templateUrl: './gear.component.html',
  styleUrl: './gear.component.css'
})
export class GearComponent {
  gearLines = Array(14).fill(1).map((x,i)=>i+1); 
}
