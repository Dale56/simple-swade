import { Component } from '@angular/core';
import { CustomInputBoxComponent } from "../custom-input-box/custom-input-box.component";
import { NgFor, NgForOf } from '@angular/common';
import { CustomInputBoxUnderlineComponent } from "../custom-input-box-underline/custom-input-box-underline.component";

@Component({
  selector: 'app-name-stats',
  imports: [CustomInputBoxComponent, NgForOf, CustomInputBoxUnderlineComponent],
  templateUrl: './name-stats.component.html',
  styleUrl: './name-stats.component.css'
})
export class NameStatsComponent {
  statsToShow = ['Name', 'Race', 'Description', 'Bennies'];
}
