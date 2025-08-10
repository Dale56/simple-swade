import { Component } from '@angular/core';
import { CustomInputBoxUnderlineComponent } from "../custom-input-box-underline/custom-input-box-underline.component";

@Component({
  selector: 'app-weapon-row',
  imports: [CustomInputBoxUnderlineComponent],
  templateUrl: './weapon-row.component.html',
  styleUrl: './weapon-row.component.css'
})
export class WeaponRowComponent {

}
