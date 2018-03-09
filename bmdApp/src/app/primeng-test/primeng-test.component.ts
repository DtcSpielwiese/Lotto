import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-primeng-test',
  templateUrl: './primeng-test.component.html',
  styleUrls: ['./primeng-test.component.scss']
})
export class PrimengTestComponent implements OnInit {

  options: any;

  overlays: any[];

  constructor() { }

  ngOnInit() {
    console.log("init Google Maps");
    this.options = {
      center: {lat: 50.815126, lng: 12.822180},
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.HYBRID,
    };

    this.overlays = [
      new google.maps.Marker({position: {lat: 50.815126, lng: 12.822180}, title:"Eugen's zu Hause"}),
      new google.maps.Marker({position: {lat: 50.815453, lng: 12.819001}, title:"Ingrid's zu Hause"}),
      new google.maps.Polygon({paths: [
          {lat: 50.815220, lng: 12.822044},
          {lat: 50.815246, lng: 12.822190},
          {lat: 50.814800, lng: 12.822346},
          {lat: 50.814757, lng: 12.822074},
        ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
      }),
      /*
      new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
      new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
      new google.maps.Polygon({paths: [
          {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
        ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
      }),
      new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
      new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
    */
    ];
  }

}
