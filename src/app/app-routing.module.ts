import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImmunizationAlertsComponent } from './immunization-alerts/immunization-alerts.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'immunization-alerts',
    component: ImmunizationAlertsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
