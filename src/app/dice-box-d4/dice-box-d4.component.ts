import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SvgTriangleComponent } from "../svg-triangle/svg-triangle.component";
import { SvgFilledCircleComponent } from "../svg-filled-circle/svg-filled-circle.component";

@Component({
  selector: 'app-dice-box-d4',
  imports: [SvgTriangleComponent, SvgFilledCircleComponent],
  templateUrl: './dice-box-d4.component.html',
  styleUrl: './dice-box-d4.component.css'
})
export class DiceBoxD4Component {
    @Input() value: string = '';
  @Input() checked: boolean = false;
  @Input() label: string = '';
  @Output() dieChosen = new EventEmitter<string>();

  handleClick () {
    this.dieChosen.emit(this.value);
  }
}
