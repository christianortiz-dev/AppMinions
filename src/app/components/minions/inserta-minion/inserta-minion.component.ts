import { Component } from '@angular/core';
import { Minion } from '../../../interfaces/minion';
import { MinionServicioService } from '../../../servicios/minion-servicio.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inserta-minion',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './inserta-minion.component.html',
  styleUrl: './inserta-minion.component.css'
})
export class InsertaMinionComponent {
  minion!: Minion;
  datos!:Minion[];

  constructor(private minionServicio: MinionServicioService){
    this.datos = minionServicio.mostarListaDatos();
  }

  insertarMinion(){
    this.minion.id = this.minionServicio.listaMinions.length+1;
    this.minionServicio.insertarMinion(this.minion);
  }
}
