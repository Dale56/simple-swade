import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SvgPentagonComponent } from "../svg-pentagon/svg-pentagon.component";
import { SvgFilledCircleComponent } from "../svg-filled-circle/svg-filled-circle.component";

@Component({
  selector: 'app-dice-box-d12',
  imports: [SvgPentagonComponent, SvgFilledCircleComponent],
  templateUrl: './dice-box-d12.component.html',
  styleUrl: './dice-box-d12.component.css'
})
export class DiceBoxD12Component {
  @Input() value: string = '';
  @Input() checked: boolean = false;
  @Input() label: string = '';
  @Output() dieChosen = new EventEmitter<string>();

  handleClick() {
    this.dieChosen.emit(this.value);
  }
}
