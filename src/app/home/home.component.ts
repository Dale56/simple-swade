import { Component, ElementRef, ViewChild } from '@angular/core';
import { AttributesComponent } from "../attributes/attributes.component";
import { NameStatsComponent } from "../name-stats/name-stats.component";
import { SkillsComponent } from "../skills/skills.component";
import { EdgesEtcComponent } from "../edges-etc/edges-etc.component";
import { GearComponent } from "../gear/gear.component";
import { PowersComponent } from "../../powers/powers.component";
import { WeaponsComponent } from "../weapons/weapons.component";
import { BackendHandlerService } from '../../services/backend-handler.service';


interface NameStats {
  name: string;
  race: string;
  description: string;
  bennies: string;
}

interface DiceAttributes {
  agility: number;
  smarts: number;
  spirit: number;
  strength: number;
  vigor: number;
}

interface DiceSkills {
  athletics: number;
  commonknowledge: number;
  notice: number;
  persuassion: number;
  stealth: number;
  [key: string]: number;
}

interface Gear {
  [key: string]: string;
}

interface Hindrances {
  [key: string]: string;
}

interface Edges {
  [key: string]: string;
}

interface Advances{
  [key: string]: string;
}

interface HindrancesSection {
  hindrances: Hindrances;
  edges: Edges;
  advances: Advances;
}

interface Powers {
  [key: string]: {
    pp: string;
    range: string;
    duration: string;
    effect: string;
  }
} 

interface Weapons {
  [key:string]: {
    range: string;
    damage: string;
    ap: string;
    rof: string;
    wt: string;
    notes: string;
  }
}

interface CharacterSheet {
  diceattributes: DiceAttributes;
  namestats: NameStats;
  diceskills: DiceSkills;
  gear: Gear;
  hindrancessection: HindrancesSection;
  powers: Powers;
  weapons: Weapons;
}

@Component({
  selector: 'app-home',
  imports: [AttributesComponent, NameStatsComponent, SkillsComponent, EdgesEtcComponent, GearComponent, PowersComponent, WeaponsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private characterService: BackendHandlerService) { }
  @ViewChild('diceattributes') diceAttributes!: AttributesComponent;
  @ViewChild('namestats') nameStats!: NameStatsComponent;
  @ViewChild('diceskills') diceSkills!: SkillsComponent;
  @ViewChild('gear') gear!: GearComponent;
  @ViewChild('hindrances') hindrancessection!: EdgesEtcComponent;
  @ViewChild('powers') powers!: PowersComponent;
  @ViewChild('weapons') weapons!: WeaponsComponent;

  saveSheet() {
    const outBoundSheet = {} as CharacterSheet;
    outBoundSheet.diceattributes = this.diceAttributes.saveStuff();
    outBoundSheet.namestats = this.nameStats.saveStuff();
    outBoundSheet.diceskills = this.diceSkills.saveStuff();
    outBoundSheet.gear = this.gear.saveStuff();
    outBoundSheet.hindrancessection = this.hindrancessection.saveStuff();
    outBoundSheet.powers = this.powers.saveStuff();
    outBoundSheet.weapons = this.weapons.saveStuff();
    this.characterService.sendSheetInfo(outBoundSheet).subscribe(response => {
      console.log('Save response:', response);
    });
  }
}
