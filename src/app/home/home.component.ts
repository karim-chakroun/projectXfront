import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
  ],
})
export class HomeComponent implements OnInit {

  service = inject(UserService);
  router = inject(Router);
  constructor() {
  }

  userDetails: any;
  ngOnInit(): void {
    // if (localStorage.getItem('token') != null) {
    //   this.router.navigateByUrl('/home');
    // }
    if (localStorage.getItem('token') != null) {

      this.service.getUserProfile().subscribe(
        res => {
          this.userDetails = res;
          console.log(this.userDetails);
          if (this.userDetails.userRole == 'ADMIN') {
            this.router.navigateByUrl('/dashboard');
          }
        },
        err => {
          console.log(err);
        }

      );

    }
  }
}
