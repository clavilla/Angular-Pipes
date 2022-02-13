import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'cristian';
  nombreUpper: string = 'CRISTIAN';
  nombreCompleto: string = 'crIsTiAn laViLla';

  fecha : Date = new Date(); // el día de hoy

}
