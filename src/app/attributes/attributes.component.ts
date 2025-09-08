import { Component, QueryList, ViewChildren } from '@angular/core';
import { DieLineComponent } from "../die-line/die-line.component";
import { NgFor } from '@angular/common';

interface DiceAttributes {
  agility: number;
  smarts: number;
  spirit: number;
  strength: number;
  vigor: number;
}

@Component({
  selector: 'app-attributes',
  imports: [DieLineComponent, NgFor],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.css'
})

export class AttributesComponent {
  attributesToShow = ['Agility', 'Smarts', 'Spirit', 'Strength', 'Vigor'];
  attributeData!: DiceAttributes;
  @ViewChildren(DieLineComponent) dieLines!: QueryList<DieLineComponent>;

  saveStuff() {
    this.attributeData = {
      agility: Number(this.dieLines.get(0)?.selectedValue.slice(1)),
      smarts: Number(this.dieLines.get(1)?.selectedValue.slice(1)),
      spirit: Number(this.dieLines.get(2)?.selectedValue.slice(1)),
      strength: Number(this.dieLines.get(3)?.selectedValue.slice(1)),
      vigor: Number(this.dieLines.get(4)?.selectedValue.slice(1))
    }
    return this.attributeData;
  }
}
