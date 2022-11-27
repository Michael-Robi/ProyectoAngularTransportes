import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesListComponent } from './components/games-list/games-list.component';

// Services
import { GamesService } from './services/games.service';
import { LogisticaMarinaService } from './services/logistica-marina.service';
import { LogisticaTerrestreService } from './services/logistica-terrestre.service';
import { GameFormComponent } from './components/game-form/game-form.component';
import { LogisticaMarinaFormComponent } from './components/logistica-marina-form/logistica-marina-form.component';
import { LogisticaMarinaListComponent } from './components/logistica-marina-list/logistica-marina-list.component';
import { LogisticaTerrestreFormComponent } from './components/logistica-terrestre-form/logistica-terrestre-form.component';
import { LogisticaTerrestreListComponent } from './components/logistica-terrestre-list/logistica-terrestre-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesListComponent,
    GameFormComponent,
    LogisticaMarinaFormComponent,
    LogisticaMarinaListComponent,
    LogisticaTerrestreFormComponent,
    LogisticaTerrestreListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService,
    LogisticaMarinaService,
    LogisticaTerrestreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
