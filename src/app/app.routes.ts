import { Routes } from '@angular/router';
import { LoginComponent } from './componests/login/login.component';
import { DashboardComponent } from './componests/dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];