import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { MapListComponent } from './components/map-list/map-list.component';
import { FlatmatesComponent } from './components/flatmates/flatmates.component';
import { House1Component } from './components/houses/house1/house1.component';
import { House2Component } from './components/houses/house2/house2.component';



@NgModule({


  declarations: [AppComponent, SearchListComponent, MapListComponent, FlatmatesComponent, House1Component, House2Component],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
