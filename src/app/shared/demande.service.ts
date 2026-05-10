import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Car } from '../models/Car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  readonly BaseURI = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addDemande(payload: any): Observable<any> {
    return this.http.post(`${this.BaseURI}/Car/Demande`, payload);
  }
}
