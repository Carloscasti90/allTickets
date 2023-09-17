import { Component } from '@angular/core';

@Component({
  selector: 'app-zona-palcos',
  templateUrl: './zona-palcos.component.html',
  styleUrls: ['./zona-palcos.component.css']
})
export class ZonaPalcosComponent {

  lista22:any[] = [];

  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.lista22.push({
        id: i.toString(),
        valor:i.toString(),
        localidad: 'norm',
        seleccionado: false
      });
    }
  }
  toggleSeleccion(index: number) {

    this.lista22[index].seleccionado = !this.lista22[index].seleccionado;
  }


}

