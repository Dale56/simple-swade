import { Component } from '@angular/core';
import { PowerRowComponent } from "../app/power-row/power-row.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-powers',
  imports: [PowerRowComponent, NgFor],
  templateUrl: './powers.component.html',
  styleUrl: './powers.component.css'
})
export class PowersComponent {
  powerLines = Array(7).fill(1).map((x,i)=>i+1); 
}
