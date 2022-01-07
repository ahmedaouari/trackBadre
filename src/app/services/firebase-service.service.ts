import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  recaptchaVerifier
  confirmationResult: firebase.auth.ConfirmationResult;
  constructor(private afDB: AngularFireDatabase,
    
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
    ) { 
  //    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    }
getuser(){
  var itemref = this.afDB.database.ref('/websockettrack-default-rtdb/').once('value').then((data) => {
    //const response_data = data.val();
   // console.log(response_data)
    var jsonRequest = JSON.parse(JSON.stringify( data.val()));
    console.log("JSONREQUEST :????>>>>>>>" + JSON.stringify(jsonRequest) );
   
  })

   let  infos = [];
   let item  = this.afDB.object('/info').valueChanges().subscribe(res=>{
     console.log(res)
   });
   console.log(item)
    const ref = firebase.database().ref('/websockettrack-default-rtdb/ahmed/').once('value').then(data=>{
      console.log(data.val());
    },err=>{
      console.log(err)
    })
    
    
}

 snapshotToArray(snapshot) {
  var returnArr = [];
  console.log(snapshot)

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
console.log(item)
      returnArr.push(item);
  });

  return returnArr;
}

registerUser(value) {
  return new Promise<any>((resolve, reject) => {

    this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
  }) 

}

loginUser(recaptchaVerifier, phone) {
 // this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

  console.log(phone,recaptchaVerifier)
  return new Promise<any>((resolve, reject) => {
    this.afAuth.signInWithPhoneNumber( phone,recaptchaVerifier).then(
        res => resolve(res),
        err => reject(err))
  })
}
logoutUser() {
  return new Promise((resolve, reject) => {
    if (this.afAuth.currentUser) {
      this.afAuth.signOut()
        .then(
          res => resolve(res),
          err => reject(err))
    }
  })
}

userDetails() {
  return this.afAuth.user
}
public async enterVerificationCode(code) {
  return new Promise<any>((resolve, reject) => {
    this.confirmationResult.confirm(code).then(async (result) => {
      console.log(result);
      const user = result.user;
      resolve(user);
    }).catch((error) => {
      reject(error);
    });

  });
}
addpostion(uid , lat,laf) {
  return this.afs.collection('Position1'+uid).add({
    postion: {lat:lat, lng:laf},
    from:uid,
    createdAt: new Date()
  });
}



}
