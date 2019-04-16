import { Component, OnInit } from '@angular/core';
import { KittenComponent } from './kitten/kitten.component';


@Component({ 
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent  implements OnInit  {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  messageFromKitten:string;
  handleMessageFromKitten(evt){
this.messageFromKitten = evt; 
  }    
constructor(){

  }
}


