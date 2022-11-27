import { Title } from '@angular/platform-browser';

export interface LogisticaMarina {
    id?: number,
    tipoDeProducto?: string,
    cantidadDelProducto?: string,
    fechaDeRegistro?: Date,
    fechaDeEntrega?: Date,
    puertoDeEntrega?: string,
    precioDeEnvio?: string,
    placaDelBarco?: string,
    numeroDeGuia?: string,
};