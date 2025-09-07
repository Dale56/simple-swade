import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input-box-underline',
  imports: [FormsModule],
  templateUrl: './custom-input-box-underline.component.html',
  styleUrl: './custom-input-box-underline.component.css'
})

export class CustomInputBoxUnderlineComponent {
  @Input() width: string = "250px"; 
  @Input() fontSize: string = "15px"
  @Input() height: string = "";
  @Input() content: string = "";
  @Input() index: number = 0;
}
