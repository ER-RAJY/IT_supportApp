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

  addEquipement(equipment: Equipements): Observable<Equipements> {
    return this.httpClient.post<Equipements>(`${this.BaseUrl}/add`, equipment);
  }

  editEquipement(id: number, equipment: Equipements): Observable<Equipements> {
    return this.httpClient.put<Equipements>(`${this.BaseUrl}/edit/${id}`, equipment);
  }


  deleteEquipement(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.BaseUrl}/delete/${id}`);
  }

  private createFormData(equipment: Equipements): FormData {
    const formData = new FormData();
    formData.append('name', equipment.name);
    formData.append('description', equipment.description);
    formData.append('statut', equipment.statut);

    return formData;
  }

  private dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }
}
