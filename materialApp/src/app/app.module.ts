import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import {MaterialModul} from './material.modul';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminComponent } from './pages/admin/admin.component';
import { RundenuebersichtComponent } from './components/rundenuebersicht/rundenuebersicht.component';
import {ZiehungComponent} from './pages/ziehung/ziehung.component';
import {LottoService} from './providers/lotto.service';



@NgModule({
  declarations: [
    AdminComponent,
    AppComponent,
    RundenuebersichtComponent,
    ZiehungComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModul,
    FormsModule
  ],
  providers: [LottoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
