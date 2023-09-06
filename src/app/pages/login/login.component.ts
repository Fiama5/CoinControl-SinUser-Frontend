import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' };
  apiUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

  login() {
    this.http.post(this.apiUrl, this.user).subscribe(
      (response: any) => {
        console.log('Inicio de sesión exitoso:', response.message);

      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        console.error('Mensaje de error:', error.error.message);
      }
    );
  }
}
