import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: HeaderComponent,
        children: [
            { path: '', component: HomeComponent }
        ]
    },
];
