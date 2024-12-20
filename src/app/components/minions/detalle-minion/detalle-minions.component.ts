import { ActivatedRoute, RouterLink, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { Minion } from '../../../interfaces/minion';
import { MinionServicioService } from '../../../servicios/minion-servicio.service';

@Component({
  selector: 'app-detalle-minions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-minions.component.html',
  styleUrl: './detalle-minions.component.css'
})
export class DetalleMinionsComponent {
  minion! : Minion;
  id = 0;

  constructor(private activatedRoute : ActivatedRoute, private minionServicio : MinionServicioService){
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap)=> {
      this.id = parseInt(parametros.get("id")!);
    })

    this.minion = {
      id: this.id,
      nombre: this.minionServicio.listaMinions[this.id -1].nombre,
      bio: this.minionServicio.listaMinions[this.id -1].bio,
      img: this.minionServicio.listaMinions[this.id -1].img,
      birth: this.minionServicio.listaMinions[this.id -1].birth,
      side: this.minionServicio.listaMinions[this.id -1].side

    }
  }
}
