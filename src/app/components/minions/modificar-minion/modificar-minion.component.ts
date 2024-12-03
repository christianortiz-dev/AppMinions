import { Component } from '@angular/core';
import { Minion } from '../../../interfaces/minion';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MinionServicioService } from '../../../servicios/minion-servicio.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-minion',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './modificar-minion.component.html',
  styleUrl: './modificar-minion.component.css'
})
export class ModificarMinionComponent {
  minion!:Minion;
  datos!:Minion[];
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

    this.datos = minionServicio.mostarListaDatos();
  }

  modificarMinion(minion:Minion){
    this.minionServicio.modificarMinion(minion);
  }
}
