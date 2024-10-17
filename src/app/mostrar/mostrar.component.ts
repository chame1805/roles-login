import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  @Input() mostrarDatos: boolean = false;  // Recibe el valor de LoginComponent
  usuariosGuardados: any[] = [];

  constructor(private service: MessageService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.usuariosGuardados = this.service.obtenerUsuario();
  }

  ngOnChanges(): void {
    // Forzar la detección de cambios cuando mostrarDatos cambie
    this.cdr.detectChanges();
  }
}
