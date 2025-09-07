import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-power-row',
  imports: [NgFor, FormsModule],
  templateUrl: './power-row.component.html',
  styleUrl: './power-row.component.css'
})
export class PowerRowComponent {
  trackByIndex(index: number, item: string) {
    return index;
  }

  powerContents = Array(5).fill("");

  getPower() {
    return this.powerContents;
  }
}