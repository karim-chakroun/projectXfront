import { Component, inject, OnInit } from '@angular/core';
import { CarService } from '../shared/car.service';
import { Car } from '../models/Car';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from '../footer/footer.component';
import { DemandeDialogComponent } from '../demande-dialog/demande-dialog.component';

@Component({
  selector: 'app-cars',
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    MatDialogModule,
    FooterComponent,
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent implements OnInit {
  carService = inject(CarService);
  dialog = inject(MatDialog);
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

  openDemande(car: Car) {
    this.dialog.open(DemandeDialogComponent, {
      width: '720px',
      maxHeight: '90vh',
      data: { car },
      panelClass: 'demande-dialog-panel'
    });
  }
}
