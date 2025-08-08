import { Component } from '@angular/core';
import { AttributesComponent } from "../attributes/attributes.component";
import { NameStatsComponent } from "../name-stats/name-stats.component";
import { SkillsComponent } from "../skills/skills.component";
import { EdgesEtcComponent } from "../edges-etc/edges-etc.component";
import { GearComponent } from "../gear/gear.component";

@Component({
  selector: 'app-home',
  imports: [AttributesComponent, NameStatsComponent, SkillsComponent, EdgesEtcComponent, GearComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
