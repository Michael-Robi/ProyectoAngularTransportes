import { Title } from '@angular/platform-browser';

export interface LogisticaTerrestre {
    id?: number,
    tipoDeProducto?: string,
    cantidadDelProducto?: string,
    fechaDeRegistro?: Date,
    fechaDeEntrega?: Date,
    bodegaDeEntrega?: string,
    precioDeEnvio?: string,
    placaDelVehiculo?: string,
    numeroDeGuia?: string,
};