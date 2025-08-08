import { AfterViewChecked, Component, ElementRef, Input, Output, ViewChild, EventEmitter} from '@angular/core';
import { DiceBoxD6Component } from "../dice-box-d6/dice-box-d6.component";
import { DiceBoxD4Component } from "../dice-box-d4/dice-box-d4.component";
import { DiceBoxD8Component } from "../dice-box-d8/dice-box-d8.component";
import { DiceBoxD10Component } from "../dice-box-d10/dice-box-d10.component";
import { DiceBoxD12Component } from "../dice-box-d12/dice-box-d12.component";
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-die-line',
  imports: [DiceBoxD6Component, DiceBoxD4Component, DiceBoxD8Component, DiceBoxD10Component, DiceBoxD12Component, FormsModule, NgIf],
  templateUrl: './die-line.component.html',
  styleUrl: './die-line.component.css'
})
export class DieLineComponent implements AfterViewChecked{
  @ViewChild('customskill') customskill!: ElementRef<HTMLInputElement>;
  @Input() name: string='';
  @Input() label: string='';
  @Input() mainLabel: string='';
  @Input() removable: boolean=false;
  @Input() editable: boolean=false;
  @Output() callRemoval = new EventEmitter<string>();
  selectedValue: string = 'd4';
  editing: boolean = false;
  private shouldFocus = false;

  editSkill() {
    this.editing = !this.editing;
    if (this.editing) {
      this.shouldFocus = true;
    }
  }
  removeSkillCall() {
    this.callRemoval.emit(this.name);
  }
  // Has to do with order of rendering; ensures that whenever editSkill() is called something actually 
  ngAfterViewChecked(): void {
    if(this.shouldFocus && this.customskill) {
      this.customskill.nativeElement.focus();
      this.shouldFocus = false;
    };
  }
}
