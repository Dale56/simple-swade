import { Component, ElementRef, ViewChild } from '@angular/core';
import { AttributesComponent } from "../attributes/attributes.component";
import { NameStatsComponent } from "../name-stats/name-stats.component";
import { SkillsComponent } from "../skills/skills.component";
import { EdgesEtcComponent } from "../edges-etc/edges-etc.component";
import { GearComponent } from "../gear/gear.component";
import { PowersComponent } from "../../powers/powers.component";
import { WeaponsComponent } from "../weapons/weapons.component";

@Component({
  selector: 'app-home',
  imports: [AttributesComponent, NameStatsComponent, SkillsComponent, EdgesEtcComponent, GearComponent, PowersComponent, WeaponsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('diceattributes') diceAttributes!: AttributesComponent;
  @ViewChild('namestats') nameStats!: NameStatsComponent;
  @ViewChild('diceskills') diceSkills!: SkillsComponent;
  @ViewChild('gear') gear!: GearComponent; 
  @ViewChild('hindrances') hindrances!: EdgesEtcComponent; 
  @ViewChild('powers') powers!: PowersComponent;
  @ViewChild('weapons') weapons!: WeaponsComponent;

  saveSheet() {
    this.diceAttributes.saveStuff();
    this.nameStats.saveStuff();
    this.diceSkills.saveStuff();
    this.gear.saveStuff();
    this.hindrances.saveStuff();
    this.powers.saveStuff();
    this.weapons.saveStuff();
  }
}
