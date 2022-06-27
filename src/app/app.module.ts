import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ImmunizationAlertsComponent } from './immunization-alerts/immunization-alerts.component';
import { DateService } from 'src/service/dataservice';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImmunizationAlertsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    ReactiveFormsModule,
    InputTextModule,    
    ButtonModule,
    CheckboxModule
  ],

  exports: [
    ButtonModule
  ],
  providers: [
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
