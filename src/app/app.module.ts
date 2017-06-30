import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { Logger } from "angular2-logger/core";
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
//routes
import { appRoutes } from './app.route'

import {
  AppComponent,
  HeaderComponent,
  CategoryComponent,
  ScannerComponent,
  TakePictureComponent,
  StatisticsComponent,
  StatisticsListComponent,
  DiagramComponent,
  AuthComponent,
  Error404Component
} from './index';


import { firebaseConfig } from './firebase.config'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

import {
  AuthService,
  BudgetService,
  TranslationService,

  AuthentificatedActivator,
  CategoryRouteActivator
 } from './services/index'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    StatisticsComponent,
    StatisticsListComponent,
    ScannerComponent,
    TakePictureComponent,
    DiagramComponent,
    AuthComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
   // BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    BudgetService,
    TranslationService,

    AuthentificatedActivator,
    CategoryRouteActivator,

  //  Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
