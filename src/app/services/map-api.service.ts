import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapAPIService {

  constructor( private http: HttpClient ) { }



  //private url: string = 'https://raw.githubusercontent.com/digital-generation/generation-take-home-intern/master/src/store_directory.json';
  getDatesJSON(url:string) {
   return this.http.get(url);
  }

}
