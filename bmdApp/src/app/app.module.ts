import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule} from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { VergleichRechnerComponent } from './vergleich-rechner/vergleich-rechner.component';
import { VrInfoComponent } from './vr-info/vr-info.component';
import { VrKrankenComponent } from './vr-kranken/vr-kranken.component';
import { VrAutoComponent } from './vr-auto/vr-auto.component';
import { VrRechtsschutzComponent } from './vr-rechtsschutz/vr-rechtsschutz.component';
import { PrimengTestComponent } from './primeng-test/primeng-test.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {PrimeNgModul} from "./prime-ng.modul";


@NgModule({
  declarations: [
    AppComponent,
    VergleichRechnerComponent,
    VrInfoComponent,
    VrKrankenComponent,
    VrAutoComponent,
    VrRechtsschutzComponent,
    PrimengTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    PrimeNgModul,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
