import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panne } from '../Models/Panne';

@Injectable({
  providedIn: 'root'
})
export class PanneService {
  private BaseUrl = 'http://localhost:8080/auth/panne';

  constructor(private httpClient: HttpClient) { }

  // Get all Pannes
  getPannes(): Observable<Panne[]> {
    return this.httpClient.get<Panne[]>(`${this.BaseUrl}/all`);
  }

  // Add a new Panne
  addPanne(panne: Panne): Observable<Panne> {
    return this.httpClient.post<Panne>(`${this.BaseUrl}/add`, panne);
  }

  // Edit an existing Panne
  editPanne(id: number, panne: Panne): Observable<Panne> {
    return this.httpClient.put<Panne>(`${this.BaseUrl}/edit/${id}`, panne);
  }

  // Delete a Panne
  deletePanne(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.BaseUrl}/delete/${id}`);
  }
}
