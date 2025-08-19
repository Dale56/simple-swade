import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CharacterSheetService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  saveCharacter(userId: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, { userId, data });
  }

  loadCharacter(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/load/${userId}`);
  }
}

