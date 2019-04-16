import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.scss'],
  
})
export class KittenComponent implements OnInit {
 @Input() food: String; 
 @Output() kittenEvent = new EventEmitter(); 
 OutputMessage: string; 
  constructor() { 
    console.log(this.food); 
      this.kittenEvent.next("How are you?");
  } 
  sendMessage(evt){
    this.kittenEvent.next(this.OutputMessage);
  }
  ngOnInit() {
  }

} 