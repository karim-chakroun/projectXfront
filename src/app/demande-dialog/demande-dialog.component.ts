import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DemandeService } from '../shared/demande.service';
import { Car } from '../models/Car';

@Component({
  selector: 'app-demande-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './demande-dialog.component.html',
  styleUrls: ['./demande-dialog.component.css']
})
export class DemandeDialogComponent implements OnInit {
  demandeForm!: FormGroup;
  loading = false;
  car: Car;

  constructor(
    private fb: FormBuilder,
    private demandeService: DemandeService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<DemandeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { car: Car }
  ) {
    this.car = data.car;
  }

  ngOnInit(): void {
    this.demandeForm = this.fb.group({
      carId: [this.car.id, Validators.required],
      nom: ['', Validators.required],
      telephone: ['', Validators.required],
      region: ['', Validators.required],
      metier: [''],
      salaire: [''],
      revenuMoyen: [''],
      autreRevenu: [''],
      avanceDispo: [''],
      retenuParMois: [''],
      patente: [false],
      terreAgricole: [false]
    });
  }

  submit() {
    if (this.demandeForm.invalid) return;
    this.loading = true;

    this.demandeService.addDemande(this.demandeForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Demande envoyée avec succès !', 'Fermer', { duration: 3000 });
        this.dialogRef.close(true);
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Erreur lors de l\'envoi', 'Fermer', { duration: 3000 });
      }
    });
  }
}
