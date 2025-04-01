import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  onLogin() {
    // Usuario y contraseña simulados (sin base de datos)
    const validUsername = 'admin';
    const validPassword = '123456';

    if (this.username === validUsername && this.password === validPassword) {
      this.successMessage = 'Inicio de sesión exitoso';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
      this.successMessage = '';
    }
  }
}