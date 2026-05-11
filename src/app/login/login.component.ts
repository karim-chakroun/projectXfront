import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../shared/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    CommonModule,
    RouterModule,
  ],
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private router: Router, private snackBar: MatSnackBar) { }
  formModel = {
    userName: '',
    password: ''
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {

        this.snackBar.open("Connected", "Welcom!");
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');

      },
      err => {
        this.snackBar.open("Wrong password", "Try again");
      }
    );
  }
}
