import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpService } from '../http.service';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";

@Component({
  selector: 'app-customer-map',
  templateUrl: './customer-map.component.html',
  styleUrls: ['./customer-map.component.scss']
})

export class CustomerMapComponent implements OnInit {
  @Input() deliveryId;

  delivery
  marker
  myMap

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    //map creation
    this.myMap = L.map('map').setView([44.133331, 12.233333], 8);
    //map main layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.myMap);

    this._http.getDeliveryById(this.deliveryId).subscribe(data => {
      this.delivery = data["body"]["delivery"]
      var delivery_pos = L.latLng(this.delivery.location.geometry.coordinates[0], this.delivery.location.geometry.coordinates[1]);
      this.marker = L.marker(delivery_pos).addTo(this.myMap)
        .bindPopup("Posizione corrente del corriere").openPopup();
    })
  }

  refreshPosition(){
    this._http.getDeliveryById(this.deliveryId).subscribe(data => {
      this.delivery = data["body"]["delivery"]
      var delivery_pos = L.latLng(this.delivery.location.geometry.coordinates[0], this.delivery.location.geometry.coordinates[1]);
      
      if(this.marker != undefined){
        this.myMap.removeLayer(this.marker)
      }
      this.marker = L.marker(delivery_pos).addTo(this.myMap)
        .bindPopup("Posizione corrente del corriere").openPopup();
        
    })
  }
}
