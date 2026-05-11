import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarsComponent } from './cars/cars.component';
import { AddDemandeComponent } from './add-demande/add-demande.component';
import { CarsDataComponent } from './cars-data/cars-data.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'cars',
    component: HeaderComponent,
    children: [
      { path: '', component: CarsComponent }
    ]
  },
  {
    path: 'demande-leasing',
    component: HeaderComponent,
    children: [
      { path: '', component: AddDemandeComponent }
    ]
  },
  {
    path: 'contact',
    component: HeaderComponent,
    children: [
      { path: '', component: ContactComponent }
    ]
  },
  {
    path: 'about',
    component: HeaderComponent,
    children: [
      { path: '', component: AboutComponent }
    ]
  },
  {
    path: 'dashboard',
    component: SidebarComponent,
    children: [
      { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMIN'] } },
    ]
  },
  {
    path: 'cars-data',
    component: SidebarComponent,
    children: [
      { path: '', component: CarsDataComponent, canActivate: [AuthGuard], data: { permittedRoles: ['ADMIN'] } },
    ]
  },
];
