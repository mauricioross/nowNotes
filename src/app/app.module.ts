import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
var firebase = require("firebase");
var config = {
 apiKey: "<API_KEY>",
 authDomain: "<PROJECT_ID>.firebaseapp.com",
 databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
 storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [firebase],
  bootstrap: [AppComponent]
})
export class AppModule { }
