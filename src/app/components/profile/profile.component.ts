import { Component, OnInit } from '@angular/core';
import { APIService } from  '../../api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private  contacts:  Array<object> = [];
  constructor(private  apiService:  APIService) { }

  ngOnInit() {
    this.getContacts();
  }

  public  getContacts(){
    this.apiService.getAPIData().subscribe((data:  Array<object>) => {
        this.contacts  =  data;
        console.log(data);
    });
  }
}
