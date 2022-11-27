import { Component, OnInit } from '@angular/core';
import { LogisticaTerrestre } from 'src/app/models/LogisticaTerrestre';

import { LogisticaTerrestreService } from 'src/app/services/logistica-terrestre.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logistica-terrestre-form',
  templateUrl: './logistica-terrestre-form.component.html',
  styleUrls: ['./logistica-terrestre-form.component.css']
})
export class LogisticaTerrestreFormComponent implements OnInit {

  producto: LogisticaTerrestre = {
    id: 0,
    tipoDeProducto: '',
    cantidadDelProducto: '',
    fechaDeRegistro: new Date(),
    fechaDeEntrega: new Date()
  };

  edit: boolean = false;

  constructor(private objService: LogisticaTerrestreService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.objService.getLogisticaTerrestre(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.producto = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveLogisticaMarina() {
    delete this.producto.fechaDeRegistro;
    delete this.producto.id;
    this.objService.saveLogisticaTerrestre(this.producto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/logisticaterrestre']);
        },
        err => console.log(err)
      )
  }

  updateLogisticaMarina() {
    delete this.producto.fechaDeRegistro;
    this.objService.updateLogisticaTerrestre(this.producto.id, this.producto)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/logisticaterrestre']);
        },
        err => console.log(err)
      )
  }

}
