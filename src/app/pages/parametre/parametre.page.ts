import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
})
export class ParametrePage  {
  positions:any[];
  constructor(private router: Router,
    private afs: AngularFirestore,) { }

    ionViewWillEnter() {
    this.afs.collection("Position1VXBygdiIQegdByz5fJ2ljCTb1um2").valueChanges().subscribe(res=>{
      this.positions=res;
      console.log(res);
    },err=>{
      console.log(err)
    })
  }
  login(){
    console.log('parametre');
this.router.navigateByUrl('/parametre');
  }
}
