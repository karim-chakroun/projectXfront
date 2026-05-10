import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/Car';
import { PaginatedResult } from '../models/PaginatedResult';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  readonly BaseURI = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCars(page: number, pageSize: number) {
    return this.http.get<PaginatedResult<Car>>(
      `${this.BaseURI}/Car/getAllCars?page=${page}&pageSize=${pageSize}`
    );
  }
  addCar(payload: any) {
  return this.http.post(`${this.BaseURI}/Car/AddCar`, payload);
}
}
