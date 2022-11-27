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
    fechaDeRegistro: new Date(),
    fechaDeEntrega: new Date()
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
    delete this.producto.fechaDeRegistro;
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
    delete this.producto.fechaDeRegistro;
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
