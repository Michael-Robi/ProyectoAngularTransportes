import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogisticaTerrestre } from '../models/LogisticaTerrestre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogisticaTerrestreService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getLogisticasTerrestre() {
    return this.http.get(`${this.API_URI}/logisticaterrestre`);
  }

  getLogisticaTerrestre(id: string) {
    return this.http.get(`${this.API_URI}/logisticaterrestre/${id}`);
  }

  deleteLogisticaTerrestre(id: string) {
    return this.http.delete(`${this.API_URI}/logisticaterrestre/${id}`);
  }

  saveLogisticaTerrestre(objSave: LogisticaTerrestre) {
    return this.http.post(`${this.API_URI}/logisticaterrestre`, objSave);
  }

  updateLogisticaTerrestre(id: string|number, objUpdated: LogisticaTerrestre): Observable<LogisticaTerrestre> {
    return this.http.put(`${this.API_URI}/logisticaterrestre/${id}`, objUpdated);
  }

}
