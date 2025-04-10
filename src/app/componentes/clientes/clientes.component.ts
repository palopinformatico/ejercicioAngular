import { Component, OnInit } from '@angular/core';
import { ClienteService, Cliente } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { FormatoTelefonoPipe } from '../../pipes/formato-telefono.pipe';

@Component({
  selector: 'app-clientes',
  standalone: true,  // Esto indica que es un Standalone Component
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
  imports: [CommonModule, FormatoTelefonoPipe]
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.obtenerClientes().subscribe((data: Cliente[]) => {
      this.clientes = data;
	  console.log(this.clientes);
    });
  }
}
