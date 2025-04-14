import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  paisOrigen: string;
}

export interface ClientePaginadoResponse {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  clientes: Cliente[];
}


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:5064/api/clientes';    // Endpoint para clientes
  private apiUrl2 = 'http://localhost:5064/api/clientes2';  // Endpoint para clientes2

  constructor(private http: HttpClient) {}

  obtenerClientes(page: number = 1): Observable<ClientePaginadoResponse> {
	return this.http.get<ClientePaginadoResponse>(`${this.apiUrl2}?page=${page}`);
  }

  obtenerClientes2(page: number = 1): Observable<ClientePaginadoResponse> {
	return this.http.get<ClientePaginadoResponse>(`${this.apiUrl2}?page=${page}`);
  }
}
