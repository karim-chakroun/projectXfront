import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CarService } from '../shared/car.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { UploadComponent } from '../upload/upload.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-add-car-dialog',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    CommonModule,
    UploadComponent,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './add-car-dialog.component.html',
  styleUrl: './add-car-dialog.component.scss'
})
export class AddCarDialogComponent {
  form: FormGroup;
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private dialogRef: MatDialogRef<AddCarDialogComponent>
  ) {
    this.form = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: [0, Validators.required],
      price: [0, Validators.required],
      monthlyPayment: [0, Validators.required],
      durationMonths: [0],
      downPayment: [0],
      fuelType: [''],
      gearbox: ['']
    });
  }

  imageUrl!: string;

  onImageUploaded(event: any) {
    this.imageUrl = event.dbPath;
  }
  BaseURI = environment.apiUrl;

  submit() {
  if (!this.form.valid || !this.imageUrl) return;

  const payload = {
    ...this.form.value,
    imageUrl: this.imageUrl
  };

  this.carService.addCar(payload).subscribe(() => {
    this.dialogRef.close(true);
  });
}

}
