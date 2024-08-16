import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../Models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = 'http://localhost:8080/auth/tickets';

  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/all`);
  }

  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.baseUrl}/add`, ticket);
  }

  editDescriptionTicket(id: number | undefined, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.baseUrl}/editditDescrption/${id}`, ticket);
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  linkTicket(id: number, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.baseUrl}/assigner/${id}`, ticket);
  }

  editStatusTicket(id: number, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.baseUrl}/editStatus/${id}`, ticket);
  }

  findByTechnicien(id: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/byTechnicien/${id}`);
  }

  findByUtilisateur(id: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/byUtilisateur/${id}`);
  }
}
