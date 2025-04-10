import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoTelefono',
  standalone: true
})
export class FormatoTelefonoPipe implements PipeTransform {
  transform(value: string): string {
    // Elimina cualquier carácter que no sea número
    const numeros = value.replace(/\D/g, '');

    /*if (numeros.length !== 11 || !numeros.startsWith('569')) {
      return value; // Si no cumple formato esperado, lo deja igual
    }*/

    // Formato: +569 1234 5678
    const parte1 = numeros.slice(1, 5); // 1234
    const parte2 = numeros.slice(6);    // 5678
    return `+569 ${parte1} ${parte2}`;
  }
}
