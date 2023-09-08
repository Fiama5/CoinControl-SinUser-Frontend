import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router'; //importacion para poder utilizar el routing


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.user).subscribe(
      (response: any) => {
        console.log('Inicio de sesión exitoso:', response.message);
        this.router.navigate(['/home'])  //redirigir una vez el usuario sea correcto
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        console.error('Mensaje de error:', error.error.message);
      }
    );
  }
}
