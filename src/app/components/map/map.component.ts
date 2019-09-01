import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
   // varibales - declaracion 
   map: any;
  constructor() { }


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


     
  }

}
