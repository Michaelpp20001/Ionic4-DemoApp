import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapService } from '../services/map.service';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-points-of-interest',
  templateUrl: './points-of-interest.page.html',
  styleUrls: ['./points-of-interest.page.scss'],
})
export class PointsOfInterestPage implements OnInit {

  @ViewChild('map', {static: true}) mapElement: ElementRef;
  map: any;
  marker: any;

  
  constructor(
    private mapService: MapService,
    public alertController: AlertController,
    public platform: Platform
  ) {
    if(this.platform.is('mobileweb') || this.platform.is('desktop')) {
      this.buttonPlacement = "end";
    }
  }
  
  ngOnInit() {
    this.loadMap()
    this.mapService.getCurrentLocation()
  }

  buttonPlacement: string = "start";

  loadMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapService.mapOptions);
    if(this.marker) {
      this.marker.setMap(this.map)
    }
  }

  getCurrentLocation() {
    this.mapService.currentLocation().then((resp) => {

      console.log(resp)

      this.mapService.currentLatLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude)
      this.mapService.mapOptions = {
        center: this.mapService.currentLatLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.marker = new google.maps.Marker({
        position: this.mapService.currentLatLng,
        map: this.map,
      });
      this.loadMap()
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    }

    getFindLocation(lat, lon, name) {
      this.mapService.currentLatLng = new google.maps.LatLng(lat, lon)
      this.mapService.mapOptions = {
        center: this.mapService.currentLatLng,
        zoom:14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.marker = new google.maps.Marker({
        position: this.mapService.currentLatLng,
        label: name,
        map: this.map
      });
      this.loadMap();
    }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'No Search Results',
        message: `No results for ${this.mapService.searchTerm}`,
        buttons: ['OK']
      });
      await alert.present();
    }

    onFindPlaces() {
      this.mapService.findPlaces()
      .subscribe((res: any) => {
        console.log("find places response", res)
        if(res.status === "OK") {
          let found = res.candidates[0].geometry.location;
          let name = res.candidates[0].name;
          this.getFindLocation(found.lat, found.lng, name)
        }
        else {this.presentAlert();}
      })
    }

}
