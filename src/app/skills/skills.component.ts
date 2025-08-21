import { Component, Input, ViewChild } from '@angular/core';
import { DieLineComponent } from "../die-line/die-line.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [DieLineComponent, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  @ViewChild(DieLineComponent) dieLineComponent !: DieLineComponent;

  skillsToShow = ['Athletics', 'Common Knowledge', 'Notice', 'Persuasion', 'Stealth']
  newSkill() {
    this.skillsToShow.push('Test Skill')
  }
  removeSkill(skillToKill: string) {
    const index = this.skillsToShow.findIndex(skill => skill === skillToKill);
    if (index !== -1) {
    this.skillsToShow.splice(index, 1);
    }
  }
  saveStuff() {
    alert('skills');
  }
}
