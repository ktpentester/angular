import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() messageFromParent: String; 
@Output() messageToParent = new EventEmitter(); 
message: string;   
constructor() { }

clickMe(){
  this.messageToParent.next(this.message); 
   console.log(this.message);
  
  
}

  ngOnInit() {
  }

}
