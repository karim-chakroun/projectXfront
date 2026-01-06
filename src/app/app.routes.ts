import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: HeaderComponent,
        children: [
            { path: '', component: HomeComponent }
        ]
    },
      {
    path: 'dashboard',
    component: SidebarComponent,
    children: [
      { path: '', component: HomeComponent,canActivate:[AuthGuard],data :{permittedRoles:['ADMIN'] } },
    ]
  },
];
