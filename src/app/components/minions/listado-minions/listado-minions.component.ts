import { Component } from '@angular/core';
import { Minion } from '../../../interfaces/minion';
import { MinionServicioService } from '../../../servicios/minion-servicio.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-minions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listado-minions.component.html',
  styleUrl: './listado-minions.component.css',
})
export class ListadoMinionsComponent {
  listaMinions!: Minion[];
  constructor(private minionsServicio: MinionServicioService) {
    this.listaMinions = this.minionsServicio.mostrarlistaMinions();
  }
  borrarMinion(id: number) {
    this.minionsServicio.borrarMinion(id);
  }
}
