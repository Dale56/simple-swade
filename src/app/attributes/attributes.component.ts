import { Component } from '@angular/core';
import { DieLineComponent } from "../die-line/die-line.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-attributes',
  imports: [DieLineComponent, NgFor],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.css'
})
export class AttributesComponent {
  attributesToShow = ['Agility', 'Smarts', 'Spirit', 'Strength', 'Vigor']

  saveStuff() {
    alert('attributes');
  }
}
