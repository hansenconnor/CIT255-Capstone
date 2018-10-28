import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class APIService {
  
  private API_URL= environment.API_URL;

  constructor(private  httpClient:  HttpClient) { }


  getAPIData(){
    return this.httpClient.get('http://localhost:3000/api/food')
  }


//   getContacts(){
//     // return  this.httpClient.get(`${this.API_URL}/contacts`);
//     return this.httpClient.get('/api/food');
// }
}
