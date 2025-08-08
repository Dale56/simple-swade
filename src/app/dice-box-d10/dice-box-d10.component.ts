import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SvgTriangleDoubleD10Component } from "../svg-triangle-double-d10/svg-triangle-double-d10.component";
import { SvgFilledCircleComponent } from "../svg-filled-circle/svg-filled-circle.component";

@Component({
  selector: 'app-dice-box-d10',
  imports: [SvgTriangleDoubleD10Component, SvgFilledCircleComponent],
  templateUrl: './dice-box-d10.component.html',
  styleUrl: './dice-box-d10.component.css'
})
export class DiceBoxD10Component {
  @Input() value: string = '';
  @Input() checked: boolean = false;
  @Input() label: string = '';
  @Output() dieChosen = new EventEmitter<string>();

  handleClick() {
    this.dieChosen.emit(this.value);
  }
}
