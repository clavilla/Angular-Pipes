import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Olivia';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Carlos', 'Rocco'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Cristian',
    edad: 41,
    direccion: 'Córdoba, Argentina'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  //observable
  miObservable = interval(5000); // 0,1,2,3,4,5,6...

  //promesa
  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);

  });

}
