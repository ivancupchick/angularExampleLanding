import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RequestComponent } from './request/request.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng5SliderModule } from 'ng5-slider';
import { PriceVisiblePipe } from './price-visible.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RequestComponent,
    PriceVisiblePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    NgbModule,
    Ng5SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ RequestComponent ]
})
export class AppModule { }
