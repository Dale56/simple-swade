import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input-box',
  imports: [],
  templateUrl: './custom-input-box.component.html',
  styleUrl: './custom-input-box.component.css'
})
export class CustomInputBoxComponent {
  @Input() label: string='';
}
