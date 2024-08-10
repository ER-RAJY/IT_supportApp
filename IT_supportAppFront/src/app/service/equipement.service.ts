import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipements } from '../Models/Equipements';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  private BaseUrl = 'http://localhost:8080/auth/equipements';

  constructor(private httpClient: HttpClient) { }

  getEquipements(): Observable<Equipements[]> {
    return this.httpClient.get<Equipements[]>(`${this.BaseUrl}/all`);
  }
}

