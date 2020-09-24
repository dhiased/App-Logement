import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss'],
})
export class MapListComponent implements OnInit {


  map: any;
  @ViewChild("map", { read: ElementRef, static: false }) mapRef: ElementRef;

  icons: any = {
    house: {
      icon:
        "https://drive.google.com/file/d/1KZzpW1so6pfV_r51NueU-e69-T6NwpLS/view?usp=sharing",
    },

    flag: {
      icon: "http://maps.google.com/mapfiles/kml/shapes/schools.png",
    },
  };

  infoWindows: any = [];
  markers: any = [
    {
      title: "appartement S+3",
      latitude: "36.867894",
      longitude: "10.212576",
      type: "flag",
      price: "950",
      rooms: "3",
      surface: "150",
      street: "Rue Al Khili",
      picture: "./assets/s3.jpg",

    },
    {
      title: "appartement S+1",
      latitude: "36.869546",
      longitude: "10.261039",
      type: "house",
      price: "460",
      rooms: "1",
      surface: "80",
      street: "64 Rue du Parc",

      picture: "./assets/s1.jpg",

    },

    {
      title: "appartement S+2",
      latitude: "36.746605",
      longitude: "10.245097",
      type: "flag",
      price: "550",
      rooms: "2",
      surface: "100",
      street: "Rue El Fell",
      picture: "./assets/s2.jpg",
    },
    {
      title: "appartement S+2",
      latitude: "36.767425",
      longitude: "10.267801",
      type: "flag",
      price: "700",
      rooms: "2",
      surface: "100",
      street: "Avenue Farhat Hached",
      picture: '../assets/chambre11.jpg',
    },
    {
      title: "appartement S+1",
      latitude: "36.828687",
      longitude: "10.196160",
      type: "flag",
      price: "730",
      rooms: "1",
      surface: "110",
      street: "Rue Essayeh",
      picture: '../assets/chambre33.jpg',
    },
  ];

  constructor(private route: Router) {
  }

  goBackToPageTab1() {
    this.route.navigate(['tabs/tab1']);
  }
  goToListPage() {
    this.route.navigate(['searchlist']);
  }
  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        icon: "./assets/mauve64.ico",
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
        price: marker.price,
        rooms: marker.rooms,
        street: marker.street,
        picture: marker.picture,
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent =
      '<div id="content">' +
      '<img style="height:100px;width:200px;" src=' +
      marker.picture +
      "/>" +
      '<h4 id="firstHeading" class="firstHeading" > ' +
      marker.price +
      " DT/Mois</h4>" +
      "<h6>Pièces: S+ " +
      marker.rooms +
      "</h6>" +
      "<h6>Adresse: " +
      marker.street +
      "</h6>" +
      "</div>";
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
    });
    marker.addListener("click", () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for (let windows of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(36.801999, 10.231518);
    const options = {
      center: location,
      zoom: 12,
      disableDefaultUI: true,
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }










  ngOnInit() {

  }

}
