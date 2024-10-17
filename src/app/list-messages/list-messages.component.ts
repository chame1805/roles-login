import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent {
  @Input() isAdmin: boolean = false; 
  grupos: FormGroup;

  constructor(private fb: FormBuilder, private data: MessageService) {
    this.grupos = this.fb.group({
      nombre: [''],
      correo: [''],
      password: ['']
    });
  }

  envioDato() {
    // Envía los datos al servicio, agregando el usuario
    this.data.envioDatos(this.grupos.value);
    this.grupos.reset(); // Limpia el formulario después de registrar
  }
}
