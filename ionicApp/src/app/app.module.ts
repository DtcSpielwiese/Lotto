import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { AdminPage } from '../pages/admin/admin';
import { ZiehungPage } from '../pages/ziehung/ziehung';
import { CountriesPage } from "../pages/countries/countries";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LottoServiceProvider } from '../providers/lotto-service';
import { ComponentsModule } from '../components/components.module';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import {PipesModule} from "../pipes/pipes.module";
import {CountryDetailPage} from "../pages/country-detail/country-detail";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    AdminPage,
    ZiehungPage,
    CountriesPage,
    CountryDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    PipesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    AdminPage,
    ZiehungPage,
    CountriesPage,
    CountryDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LottoServiceProvider,
    RestApiProvider
  ]
})
export class AppModule {}
