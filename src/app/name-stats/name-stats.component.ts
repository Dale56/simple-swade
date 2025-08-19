import { Component, ElementRef, ViewChild } from '@angular/core';
import { CustomInputBoxComponent } from "../custom-input-box/custom-input-box.component";
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackendHandlerService } from '../../services/backend-handler.service';

interface NameStats {
  name: string;
  race: string;
  description: string;
  bennies: string;
}

@Component({
  selector: 'app-name-stats',
  imports: [CustomInputBoxComponent, NgForOf, FormsModule],
  templateUrl: './name-stats.component.html',
  styleUrls: ['./name-stats.component.css']
})
export class NameStatsComponent {
  @ViewChild('namecontent') nameContent!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('racecontent') raceContent!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('descriptioncontent') descriptionContent!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('benniescontent') benniesContent!: ElementRef<HTMLTextAreaElement>;
  characterInfo!: NameStats;

  constructor(private characterService: BackendHandlerService) { }

  woundsStates = [false, false, false];
  fatigueStates = [false, false];

  validateWound(num: number) {
    for (let i = 0; i < this.woundsStates.length; i++) {
      this.woundsStates[i] = (i === num);
    }
  }

  validateFatigue(num: number) {
    for (let i = 0; i < this.fatigueStates.length; i++) {
      this.fatigueStates[i] = (i === num);
    }
  }

  requestStuff() {
    this.characterService.getSheetInfo().subscribe(data => {
      this.characterInfo = data["name-stats"] as NameStats;
      console.log(this.characterInfo);
      this.nameContent.nativeElement.value = this.characterInfo.name;
      this.raceContent.nativeElement.value = this.characterInfo.race;
      this.descriptionContent.nativeElement.value = this.characterInfo.description;
      this.benniesContent.nativeElement.value = this.characterInfo.bennies;
    });
  }

  saveStuff() {
    this.characterInfo = {
      "name": this.nameContent.nativeElement.value,
      "race": this.raceContent.nativeElement.value,
      "description": this.descriptionContent.nativeElement.value,
      "bennies": this.benniesContent.nativeElement.value
    }
    this.characterService.sendSheetInfo(this.characterInfo).subscribe(response => {
      console.log('Save response:', response);
    });
  }

}
