import { Component, OnInit } from '@angular/core';
import { LogisticaMarina } from 'src/app/models/LogisticaMarina';

import { LogisticaMarinaService } from 'src/app/services/logistica-marina.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logistica-marina-form',
  templateUrl: './logistica-marina-form.component.html',
  styleUrls: ['./logistica-marina-form.component.css']
})
export class LogisticaMarinaFormComponent implements OnInit {

  producto: LogisticaMarina = {
    id: 0,
    tipoDeProducto: '',
    cantidadDelProducto: '',
    fechaDeRegistro: '',
    fechaDeEntrega: '',
    puertoDeEntrega: '',
    precioDeEnvio: '',
    placaDelBarco: '',
    numeroDeGuia: '',
  };

  edit: boolean = false;

  constructor(private objService: LogisticaMarinaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.objService.getLogisticaMarina(params.id)
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
    this.producto.fechaDeRegistro=this.producto.fechaDeRegistro.slice(0, 10);
    this.producto.fechaDeEntrega=this.producto.fechaDeEntrega.slice(0, 10);
    delete this.producto.id;
    this.objService.saveLogisticaMarina(this.producto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/logisticamarina']);
        },
        err => console.log(err)
      )
  }

  updateLogisticaMarina() {
    this.producto.fechaDeRegistro=this.producto.fechaDeRegistro.slice(0, 10);
    this.producto.fechaDeEntrega=this.producto.fechaDeEntrega.slice(0, 10);
    this.objService.updateLogisticaMarina(this.producto.id, this.producto)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/logisticamarina']);
        },
        err => console.log(err)
      )
  }

}
