import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../shared/user.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
   standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatExpansionModule,
    FooterComponent,
    CommonModule,
    RouterModule
  ],
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router,
    public service: UserService,) { }
    panelOpenState = false;

    searchName = new FormControl('');
  ngOnInit(): void {

  }
  private dashboardUrls = [
    "/client-details",
    "/lgd",
    "/oil-forecast",
    "/portfolio-overview"
  ];

  isDashboard() {
    return this.dashboardUrls.indexOf(this.router.url) !== -1
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  search(){
    this.router.navigate(['/search/'+this.searchName.value]);
  }

}
