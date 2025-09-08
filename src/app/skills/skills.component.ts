import { Component, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { DieLineComponent } from "../die-line/die-line.component";
import { NgFor } from '@angular/common';

interface DiceSkills {
  athletics: number;
  commonknowledge: number;
  notice: number;
  persuassion: number;
  stealth: number;
  [key: string]: number;
}

@Component({
  selector: 'app-skills',
  imports: [DieLineComponent, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillsToShow = ['Athletics', 'Common Knowledge', 'Notice', 'Persuasion', 'Stealth'];
  skillsInfo!: DiceSkills;

  @ViewChild(DieLineComponent) dieLineComponent !: DieLineComponent;
  @ViewChildren(DieLineComponent) dieskills!: QueryList<DieLineComponent>;

  newSkill() {
    this.skillsToShow.push('Test Skill');
  }
  removeSkill(skillToKill: string) {
    const index = this.skillsToShow.findIndex(skill => skill === skillToKill);
    if (index !== -1) {
      this.skillsToShow.splice(index, 1);
    }
  }
  saveStuff() {
    this.skillsInfo = {
      athletics: Number(this.dieskills.get(0)?.selectedValue.slice(1)),
      commonknowledge: Number(this.dieskills.get(1)?.selectedValue.slice(1)),
      notice: Number(this.dieskills.get(2)?.selectedValue.slice(1)),
      persuassion: Number(this.dieskills.get(3)?.selectedValue.slice(1)),
      stealth: Number(this.dieskills.get(4)?.selectedValue.slice(1))
    }
    if (this.skillsToShow.length > 5) {
      for (let i = 5; i < this.skillsToShow.length; i++) {
        const dieSkill = this.dieskills.get(i);
        if (dieSkill?.mainLabel !== undefined) {
          this.skillsToShow[i] = dieSkill.mainLabel;
        }
        this.skillsInfo[this.skillsToShow[i]] = Number(this.dieskills.get(i)?.selectedValue.slice(1));
      }
    }
    return this.skillsInfo;
  }
}
