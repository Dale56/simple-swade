import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SvgTriangleDoubleD8Component } from "../svg-triangle-double-d8/svg-triangle-double-d8.component";
import { SvgFilledCircleComponent } from "../svg-filled-circle/svg-filled-circle.component";

@Component({
  selector: 'app-dice-box-d8',
  imports: [SvgTriangleDoubleD8Component, SvgFilledCircleComponent],
  templateUrl: './dice-box-d8.component.html',
  styleUrl: './dice-box-d8.component.css'
})
export class DiceBoxD8Component {
  @Input() value: string = '';
  @Input() checked: boolean = false;
  @Input() label: string = '';
  @Output() dieChosen = new EventEmitter<string>();

  handleClick() {
    this.dieChosen.emit(this.value);
  }
}
