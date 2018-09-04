import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CoachPage } from '../pages/coach/coach';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { BiblioPage } from '../pages/biblio/biblio';
import { PromosPage } from '../pages/promos/promos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CoachPage,
    InicioPage,
    LoginPage,
    RegisterPage,
    BiblioPage,
    PromosPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CoachPage,
    InicioPage,
    LoginPage,
    RegisterPage,
    BiblioPage,
    PromosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
