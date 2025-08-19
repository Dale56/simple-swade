import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface NameStats {
  name: string;
  race: string;
  description: string;
  bennies: string;
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

