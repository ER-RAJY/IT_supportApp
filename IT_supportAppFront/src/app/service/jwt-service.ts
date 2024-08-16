import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Jwt} from "../Models/jwt/jwt";
import {jwtDecode} from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private role: string[] | null = null;

  private url = "http://localhost:8080/api/auth/"

  constructor(private http: HttpClient) { }


  login(loginRequest: any): Observable<Jwt>{
    return this.http.post<Jwt>(this.url + 'authenticate', loginRequest)
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  decodeToken(token: string): any {
    return jwtDecode(token);
  }

  getRole(): string | null {
    if (!this.role) {
      const token = this.getToken();
      if (token) {
        this.role = this.decodeToken(token).role || [];
      }
    }
    return Array.isArray(this.role) && this.role.length > 0 ? this.role[0] : null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
