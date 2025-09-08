import { Component } from '@angular/core';
import { CustomInputBoxComponent } from "../custom-input-box/custom-input-box.component";
import { CustomInputBoxUnderlineComponent as CustomInputBoxUnderlineComponent } from "../custom-input-box-underline/custom-input-box-underline.component";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Hindrances {
  [key: string]: string;
}

interface Edges {
  [key: string]: string;
}

interface Advances{
  [key: string]: string;
}

interface HindrancesSection {
  hindrances: Hindrances;
  edges: Edges;
  advances: Advances;
}

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
    const hindranceJSON = {} as Hindrances;
    for (let i = 0; i < this.hindrances.length; i++) {
      hindranceJSON[i] = this.hindrances[i];
    }

    const edgeJSON = {} as Edges;
    for (let i = 0; i < this.edges.length; i++) {
      edgeJSON[i] = this.edges[i];
    }

    const advanceJSON = {} as Advances;
    for (let i = 0; i < this.advances.length; i++) {
      advanceJSON[i] = this.advances[i];
    }

    const hindrancesSection = {
      hindrances: hindranceJSON,
      edges: edgeJSON,
      advances: advanceJSON
    }

    return hindrancesSection;
  }
}
