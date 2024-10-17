import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private lista = new BehaviorSubject<any[]>([
    {
      nombre: "admi",
      correp: "admin@1",  
      password: "12345",
      rol: "Admi",
    },
  ]);
  
  datos = this.lista.asObservable();

  envioDatos(datos: any) {
    const info = this.lista.getValue();
    
    // Busca si ya existe el usuario con el mismo correo
    const usuarioExistente = info.find(user => user.correp === datos.correo);

    if (usuarioExistente) {
      console.log("El correo ya está registrado:", datos.correo);
      alert(`El correo ${datos.correo} ya está registrado.`);
    } else {
      // Si no existe, lo agrega
      info.push({ 
        nombre: datos.nombre, 
        correp: datos.correo, // Asignar el correo a 'correp' para mantener consistencia
        password: datos.password,
        rol: 'Usuario' 
      });
      this.lista.next(info);
      console.log("Usuario registrado:", datos);
      alert(`Se ha registrado el usuario con el correo ${datos.correo}.`);
    }
  }

  obtenerUsuario() {
    return this.lista.getValue();
  }

  constructor() {
    console.log("Usuarios iniciales:", this.lista.value);
  }
}
