import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { MyCustomMapboxPopupComponent } from './components/my-custom-mapbox-popup/my-custom-mapbox-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    MyCustomMapboxPopupComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ ]
})
export class AppModule { }
