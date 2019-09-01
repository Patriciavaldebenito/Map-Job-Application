import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapAPIService } from 'src/app/services/map-api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
   // varibales - declaracion 
   title = 'Maps';
   map: any;
   data = [];
   element: any;
  constructor(public json: MapAPIService) { }


  ngOnInit(): void {
  
    mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmljaWF2YWxkZWJlbml0byIsImEiOiJjanphOHg4aGUwMXRzM29vOXozOTBycGFmIn0.eU9CSOC83F1iWUwy44ad5w';

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-96, 37.8],
      zoom: 2
    });

    // code from the next step will go here!
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    // Add first marker in MexiciCity
    let marker = new mapboxgl.Marker(this.element)
      .setLngLat({
        lat: 19.42847,
        lng: -99.12766
      })
      .addTo(this.map)     
  }

  marketDateJSON(argument) {
      
   // let popupContent = this.dynamicComponentService.injectComponent(MyCustomMapboxPopupComponent,
     // x => console.log(x))
          // aqui debiese ir una propiedad , 
      // se necesita visualizar un modal con h5 name city 
      // + boton para agregar lugar a lista de favoritos

    let coordinates = argument.Coordinates;
    let arr: [number, number] = [coordinates.lng, coordinates.lat];
    // console.log("arr"+ JSON.stringify(arr));
    let marker = new mapboxgl.Marker(this.element)
      .setLngLat({
        lat: arr[1],
        lng: arr[0]
      })
     
      
      .addTo(this.map)
     // .setPopup(new mapboxgl.Popup({ offset: 25 })
    // .setHTML(popupContent))

    // return marker;
  }



  ngAfterViewInit() {
    this.json.getDatesJSON('https://raw.githubusercontent.com/digital-generation/generation-take-home-intern/master/src/store_directory.json').subscribe((res: any) => {
      this.data = res; // console.log(this.data);
      this.data.forEach(element => { // console.log("e  :" + JSON.stringify(a))
        let date = element;
         this.marketDateJSON(date);
      });
    })
  }
}
