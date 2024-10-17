import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;
  isAdmin: boolean = false;  
  isUserLoggedIn: boolean = false; 
  mostrarDatos: boolean = false

  constructor(private fb: FormBuilder, private data: MessageService) {
    this.loginForm = this.fb.group({
      correo: [''],   
      password: ['']
    });
  }

  onLogin() {
    const { correo, password } = this.loginForm.value;  
    const usuarios = this.data.obtenerUsuario(); 
    
    // Verificar si el correo y password coinciden con algún usuario registrado
    const usuario = usuarios.find(user => user.correp === correo && user.password === password);
  
    if (usuario) {
      this.loginError = false;
      console.log("Inicio de sesión exitoso como", usuario.rol);
  
      if (usuario.rol === 'Admi') {  
        console.log("Bienvenido, Administrador");
        this.isAdmin = true;  // Muestra el componente MostrarComponent
        this.isUserLoggedIn = true; // Usuario ha iniciado sesión
      } else {
        console.log(`Hola, ${usuario.nombre}. Ya estás registrado como usuario.`);
        alert(`Bienvenido ${usuario.nombre}. Ya estás registrado como usuario.`);
        this.isAdmin = false;  // No muestra el componente de registro
        this.isUserLoggedIn = true; // El usuario ha iniciado sesión
        this.mostrarDatos = true
      }
    } else {
      this.loginError = true;
      console.log("Credenciales incorrectas");
      alert("Credenciales incorrectas, por favor verifica.");
    }
  }
}
