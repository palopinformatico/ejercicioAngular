import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { ClienteService } from './services/cliente.service';  // Importa tu servicio
import { ClientesComponent } from './componentes/clientes/clientes.component';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, HttpClientModule, ClientesComponent]  // Asegúrate de importar HttpClientModule aquí
})
export class AppComponent {
  title = 'clientes-app';
}
