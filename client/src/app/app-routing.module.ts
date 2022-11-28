import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';

import { LogisticaMarinaListComponent } from './components/logistica-marina-list/logistica-marina-list.component';
import { LogisticaMarinaFormComponent } from './components/logistica-marina-form/logistica-marina-form.component';

import { LogisticaTerrestreListComponent } from './components/logistica-terrestre-list/logistica-terrestre-list.component';
import { LogisticaTerrestreFormComponent } from './components/logistica-terrestre-form/logistica-terrestre-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/logisticamarina',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GamesListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  },
  {
    path: 'logisticamarina',
    component: LogisticaMarinaListComponent
  },
  {
    path: 'logisticamarina/add',
    component: LogisticaMarinaFormComponent
  },
  {
    path: 'logisticamarina/edit/:id',
    component: LogisticaMarinaFormComponent
  },
  {
    path: 'logisticaterrestre',
    component: LogisticaTerrestreListComponent
  },
  {
    path: 'logisticaterrestre/add',
    component: LogisticaTerrestreFormComponent
  },
  {
    path: 'logisticaterrestre/edit/:id',
    component: LogisticaTerrestreFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
