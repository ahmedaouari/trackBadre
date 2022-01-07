/* eslint-disable max-len */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Map,tileLayer,marker,leaflet} from 'leaflet';
import { Storage } from '@ionic/storage';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
 // @ViewChild('map') mapElement: ElementRef;
  map: Map;
  address: string[];
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  checked=true;
  tutorialsRef:AngularFireList<any>;

  constructor(private geolocation: Geolocation,
    private userservice:FirebaseServiceService,
    private db: AngularFireDatabase,
    private afs: AngularFirestore,
    private router:Router,

    private storage:Storage) { 
    afs.collection("Position1VXBygdiIQegdByz5fJ2ljCTb1um2").valueChanges().subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })

    }

  ngOnInit() {
  }
  async ionViewWillEnter(){

 let uid=    await  this.storage.get('uid');

    await this.getCurrentCoordinates(uid);
  //  this.loadmap(11,222)
  console.log("ionViewWillEnter")
    if(this.checked){
      setTimeout(() => {
        this.ionViewWillEnter();
        
      }, 5000);

    }

}


loadmap(latitude,longitude) {
  console.log(latitude)
      setTimeout(() => {
        this.map = new Map('map').setView([33.56992014391983, -7.6385001085763875], 10);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a  href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery  © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18
        }).addTo(this.map);
    
        var marker = new leaflet.Marker(latitude).addTo(this.map) .bindPopup("<strong> Votre position</strong>")
      }, 500)
   // var  marker =  leaflet.marker([32.29169443195788,-9.229510931807052]).addTo(this.map);


}

getCurrentCoordinates(uid) {
  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
    this.loadmap( resp.coords, this.longitude)
this.userservice.addpostion(uid,  this.latitude,this.longitude ).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err);
})
   // this.loadmap(this.latitude,this.longitude);
   }).catch((error) => {
     console.log('Error getting location', error);
   });
}

mapsValue(ev){
  console.log(ev)
  if(ev!=null){
    this.checked=ev.detail.checked;
    if(this.checked){
      this.ionViewWillEnter();
    }
  }
}
parametre(){
  console.log('parametre');
this.router.navigateByUrl('/parametre');
}
}
