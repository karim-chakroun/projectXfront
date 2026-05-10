import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Car } from '../models/Car';
import { CarService } from '../shared/car.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddCarDialogComponent } from '../add-car-dialog/add-car-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-cars-data',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './cars-data.component.html',
  styleUrl: './cars-data.component.scss'
})
export class CarsDataComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'brand',
    'model',
    'year',
    'price',
    'monthlyPayment',
    'availability'
  ];
  readonly dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<Car>([]);
  totalCount = 0;
  pageSize = 10;
  pageIndex = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private carService: CarService) { }

  ngAfterViewInit() {
    this.loadCars();
  }

  loadCars() {
    this.carService.getCars(this.pageIndex + 1, this.pageSize)
      .subscribe(res => {
        this.dataSource.data = res.data;
        this.totalCount = res.totalCount;
      });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCars();
  }
  openAddCarDialog() {
  this.dialog.open(AddCarDialogComponent, {
    width: '600px'
  }).afterClosed().subscribe(res => {
    if (res) this.loadCars();
  });
}

}
