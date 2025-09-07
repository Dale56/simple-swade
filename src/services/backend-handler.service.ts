import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

interface Powers {
  [key: string]: {
    pp: string;
    range: string;
    duration: string;
    effect: string;
  }
} 

interface Weapons {
  weapon: {
    name: string;
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
  hindrances: Hindrances;
  edges: Edges;
  advances: Advances;
  powers: Powers;
  weapons: Weapons;
}

@Injectable({
  providedIn: 'root'
})
export class BackendHandlerService {
  http = inject(HttpClient);
  url = 'http://localhost:5000/character';
  nameStatsItems: Array<String> = ['hammond', 'jake', 'yakub']

  getSheetInfo() {
    return this.http.get<any>(this.url);
  }

  assembleSheetInfo() {
    
  }

  sendSheetInfo(sheetData: NameStats): Observable<any> {
    const dataOut = {
      "name-stats": {
        ...sheetData
      }
    }
    console.log(sheetData)
    return this.http.post<NameStats>(this.url, dataOut);
  }
}

