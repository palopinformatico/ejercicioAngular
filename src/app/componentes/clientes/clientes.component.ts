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
	clientes1: Cliente[] = [];
	clientes2: Cliente[] = [];
	totalPages = 1;
	currentPage = 1;
	paginas: number[] = [];

  constructor(private clienteService: ClienteService) {}

	ngOnInit(): void {
		this.cargarPagina1(1);
		this.cargarPagina2(1);
  }

  cargarPagina1(pagina: number): void {
    this.clienteService.obtenerClientes(pagina).subscribe((response: any) => {
      this.clientes1 = response.clientes;
      this.totalPages = response.totalPages;
      this.currentPage = response.currentPage;
	  this.generarPaginas();
    });
  }

  cargarPagina2(pagina: number): void {
    this.clienteService.obtenerClientes2(pagina).subscribe((response: any) => {
      this.clientes2 = response.clientes;
      this.totalPages = response.totalPages;
      this.currentPage = response.currentPage;
	  this.generarPaginas();
    });
  }

  cambiarPagina1(delta: number): void {
    const nuevaPagina = this.currentPage + delta;
    if (nuevaPagina >= 1 && nuevaPagina <= this.totalPages) {
      this.cargarPagina1(nuevaPagina);
    }
  }

  cambiarPagina2(delta: number): void {
    const nuevaPagina = this.currentPage + delta;
    if (nuevaPagina >= 1 && nuevaPagina <= this.totalPages) {
      this.cargarPagina2(nuevaPagina);
    }
  }
  
  generarPaginas(): void {
  this.paginas = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
