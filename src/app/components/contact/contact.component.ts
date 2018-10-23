import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Form bindings
  name;
  email:string;
  message:string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    var allInfo = `My name is ${this.name}`;
    alert(allInfo);
  }

}
