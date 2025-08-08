import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SvgSquareComponent } from "../svg-square/svg-square.component";
import { SvgFilledCircleComponent } from "../svg-filled-circle/svg-filled-circle.component";

@Component({
  selector: 'app-dice-box-d6',
  imports: [SvgSquareComponent, SvgFilledCircleComponent],
  templateUrl: './dice-box-d6.component.html',
  styleUrl: './dice-box-d6.component.css'
})
export class DiceBoxD6Component {
  @Input() value: string = '';
  @Input() checked: boolean = false;
  @Input() label: string = '';
  @Output() dieChosen = new EventEmitter<string>();

  handleClick() {
    this.dieChosen.emit(this.value);
  }
}
