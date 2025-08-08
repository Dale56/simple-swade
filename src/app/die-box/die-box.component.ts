import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SvgTriangleComponent } from "../svg-triangle/svg-triangle.component";
import { SvgFilledCircleComponent } from "../svg-filled-circle/svg-filled-circle.component";
import { SvgSquareComponent } from '../svg-square/svg-square.component';
import { SvgTriangleDoubleD8Component } from "../svg-triangle-double-d8/svg-triangle-double-d8.component";
import { SvgTriangleDoubleD10Component } from '../svg-triangle-double-d10/svg-triangle-double-d10.component';
import { SvgPentagonComponent } from "../svg-pentagon/svg-pentagon.component";
@Component({
  selector: 'app-die-box',
  imports: [SvgTriangleComponent, SvgFilledCircleComponent, SvgSquareComponent, SvgTriangleDoubleD8Component, SvgTriangleDoubleD10Component, SvgPentagonComponent],
  templateUrl: './die-box.component.html',
  styleUrl: './die-box.component.css'
})
export class DieBoxComponent {
  @Input() value: string = '';
  @Input() checked: boolean = false;
  @Input() label: string = '';
  @Output() dieChosen = new EventEmitter<string>();

  handleClick () {
    this.dieChosen.emit(this.value);
  }
}
