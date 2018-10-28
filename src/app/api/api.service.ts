import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})


export class APIService {

  private API_URL= environment.API_URL;

  constructor(private  httpClient:  HttpClient) { }


  getAPIData(){
    return this.httpClient.get(this.API_URL + 'food');
  }

  getFirestoreDataTest(){
    // Initialize instance of firestore
    var db = firebase.firestore();

    // Disable deprecated features
    db.settings({
      timestampsInSnapshots: true
    });
  }






//   getContacts(){
//     // return  this.httpClient.get(`${this.API_URL}/contacts`);
//     return this.httpClient.get('/api/food');
// }
}
