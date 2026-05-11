import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    FooterComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  };

  loading = false;

  constructor(private snackBar: MatSnackBar) {}

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.snackBar.open('Message envoyé avec succès !', 'Fermer', { duration: 3000 });
      this.contactForm = { nom: '', email: '', telephone: '', sujet: '', message: '' };
    }, 1000);
  }
}
