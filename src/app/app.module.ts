import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';// pour se connecter à Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; // pour manipuler la base de données Firebase
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // pour accéder aux fonction de stockage et de récupération des fichiers
export const firebaseConfig = {
  apiKey: "AIzaSyAlBZep-a5HZQBtEuUmcwgZOj1tSLkNCbI",
  authDomain: "ionic-c75e6.firebaseapp.com",
  databaseURL: "https://ionic-c75e6-default-rtdb.firebaseio.com",
  projectId: "ionic-c75e6",
  storageBucket: "ionic-c75e6.appspot.com",
  messagingSenderId: "120291630586",
  appId: "1:120291630586:web:8413ad617e5021426a1843"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
