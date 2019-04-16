import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findme',
  templateUrl: './findme.component.html',
  styleUrls: ['./findme.component.scss']
})
export class FindmeComponent implements OnInit {

  Country = ["", "INR", "USD", "EUR"];


  constructor() { 

  }

  ngOnInit() {
  }

}
