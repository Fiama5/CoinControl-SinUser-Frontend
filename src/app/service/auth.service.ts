import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';
  private userId: number | null = null;

  constructor(private http: HttpClient) { }

  login(user: { username: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

   // Función para establecer el ID del usuario
   setUserId(userId: number): void {
    this.userId = userId;
  }

  // Función para obtener el ID del usuario
  getUserId(): number | null {
    return this.userId;
  }
}
