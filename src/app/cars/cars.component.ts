import { Component, inject, OnInit } from '@angular/core';
import { CarService } from '../shared/car.service';
import { Car } from '../models/Car';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent implements OnInit {
  carService = inject(CarService);
  cars: Car[] = [];
  ngOnInit() {
    this.getCars();
  }
  getCars(){
    this.carService.getCars(0,10).subscribe(res => {
      this.cars = res.data;
    });
  }
    public createImgPath = (serverPath: string) => { 
    return `https://localhost:7164/${serverPath}`; 
  }
}
