import { Component, OnInit, HostBinding } from '@angular/core';

import { LogisticaTerrestreService } from '../../services/logistica-terrestre.service';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-logistica-terrestre-list',
  templateUrl: './logistica-terrestre-list.component.html',
  styleUrls: ['./logistica-terrestre-list.component.css']
})
export class LogisticaTerrestreListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  logisticaTerrestre: any = [];

  constructor(private objService: LogisticaTerrestreService) { }


  ngOnInit() {
    this.getListaProductos();
  }

  getListaProductos() {
    this.objService.getLogisticasTerrestre()
      .subscribe(
        res => {
          this.logisticaTerrestre = res;
        },
        err => console.log(err)
      );
  }

  deleteProducto(id: string) {
    this.objService.deleteLogisticaTerrestre(id)
      .subscribe(
        res => {
          console.log(res);
          this.getListaProductos();
        },
        err => console.log(err)
      )
  }

}
