import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../Models/user";
import { Technicien } from "../Models/Technicien";

@Injectable({
  providedIn: 'root'
})
export class TechnicienUserService {

  private baseUrl = 'http://localhost:8080/auth/register/';
  private getUrl = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}user`, user);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.getUrl}users/all`);
  }

  addTechnician(technician: Technicien): Observable<Technicien> {
    return this.httpClient.post<Technicien>(`${this.baseUrl}technicien`, technician);
  }

  getTechnicians(): Observable<Technicien[]> {
    return this.httpClient.get<Technicien[]>(`${this.getUrl}techniciens/all`);
  }
}
