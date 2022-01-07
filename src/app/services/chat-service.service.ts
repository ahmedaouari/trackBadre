import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { RouterLinkDelegate } from '@ionic/angular';
export interface User {
  uid: string;
  name: string;
}
 
export interface Message {
  createdAt: Date;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  currentUser: User = null;
  uid
  constructor(private afAuth: AngularFireAuth,
     private afs: AngularFirestore,
     private router:Router, 
     private storage :Storage) {
       this.storage.get('uid').then(value=>{
         this.uid=value
         if(value==undefined){
           this.router.navigateByUrl('/login',{replaceUrl:true})
         }
       }).catch(err=>{
         console.log(err);
       })
     /* this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;      
    });  */
  }
 
addChatMessage(msg) {
  return this.afs.collection('messages').add({
    msg: msg,
    from:this.uid,
    createdAt: new Date()
  });
}
 
addUserMessage(user:User) {
  return this.afs.collection('User').add({
    msg: user.name,
    from: this.uid,
    createdAt: new Date()
  });
}
 
getChatMessages() {
  let users = [];
  return this.getUsers().pipe(
    switchMap(res => {
      users = res;
      return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
    }),
    map(messages => {
      // Get the real name for each user
      for (let m of messages) {          
        m.fromName = this.getUserForMsg(m.from, users);
        m.myMsg = this.uid=== m.from;
      }        
      return messages
    })
  )
}
 
private getUsers() {
  return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
}
 
private getUserForMsg(msgFromId, users: User[]): string {    
  for (let usr of users) {
    if (usr.uid == msgFromId) {
      return usr.name;
    }
  }
  return 'Deleted';
}

createUsers(uid,email , phone){
  return this.afs.doc(
    `users/${uid}`
  ).set({
    uid,
    name: email,
    phone:phone
  })
}
}
