import { Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ListadoMinionsComponent } from './components/minions/listado-minions/listado-minions.component';
import { InsertaMinionComponent } from './components/minions/inserta-minion/inserta-minion.component';
import { DetalleMinionsComponent } from './components/minions/detalle-minion/detalle-minions.component';
import { ModificarMinionComponent } from './components/minions/modificar-minion/modificar-minion.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Listado',
    component: ListadoMinionsComponent
  },
  {
    path: 'Insertar',
    component: InsertaMinionComponent
  },
  {
    path: 'Detalles/:id',
    component: DetalleMinionsComponent
  },
  {
    path: 'Modificar/:id',
    component: ModificarMinionComponent
  }
];
