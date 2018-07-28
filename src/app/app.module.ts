import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatCardModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatInputModule,
} from '@angular/material';

import { 
  ApiService,
  TripService 
} from './shared';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

    // Material modules
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatInputModule,
  ],
  providers: [
    ApiService,
    TripService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
