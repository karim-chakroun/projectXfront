import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Car } from '../models/Car';
import { CarService } from '../shared/car.service';
import { DemandeService } from '../shared/demande.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-add-demande',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './add-demande.component.html',
  styleUrl: './add-demande.component.scss'
})
export class AddDemandeComponent implements OnInit {

  cars: Car[] = [];
  demandeForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private demandeService: DemandeService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.loadCars();
  }

  buildForm() {
    this.demandeForm = this.fb.group({
      carId: [null, Validators.required],
      nom: ['', Validators.required],
      telephone: ['', Validators.required],
      region: ['', Validators.required],
      salaire: [''],
      revenuMoyen: [''],
      metier: [''],
      autreRevenu: [''],
      avanceDispo: [''],
      retenuParMois: [''],
      patente: [false],
      terreAgricole: [false]
    });
  }

  loadCars() {
    this.carService.getCars(0,99999).subscribe({
      next: res => this.cars = res.data,
      error: err => console.error(err)
    });
  }

  submit() {
    if (this.demandeForm.invalid) return;

    this.loading = true;

    this.demandeService.addDemande(this.demandeForm.value)
      .subscribe({
        next: () => {
          this.loading = false;
          this.demandeForm.reset();
          alert('Demande envoyée avec succès');
        },
        error: () => this.loading = false
      });
  }
}
