import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogisticaMarina } from '../models/LogisticaMarina';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogisticaMarinaService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getLogisticasMarina() {
    return this.http.get(`${this.API_URI}/logisticamarina`);
  }

  getLogisticaMarina(id: string) {
    return this.http.get(`${this.API_URI}/logisticamarina/${id}`);
  }

  deleteLogisticaMarina(id: string) {
    return this.http.delete(`${this.API_URI}/logisticamarina/${id}`);
  }

  saveLogisticaMarina(objSave: LogisticaMarina) {
    return this.http.post(`${this.API_URI}/logisticamarina`, objSave);
  }

  updateLogisticaMarina(id: string|number, objUpdated: LogisticaMarina): Observable<LogisticaMarina> {
    return this.http.put(`${this.API_URI}/logisticamarina/${id}`, objUpdated);
  }

}
