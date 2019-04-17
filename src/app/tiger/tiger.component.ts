import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiger',
  templateUrl: './tiger.component.html',
  styleUrls: ['./tiger.component.scss','../../../node_modules/primeng/resources/primeng.min.css'] 
})
export class TigerComponent implements OnInit {

  display: boolean = false;

    
  constructor() { 

     

  }
  clickMe(){
    
    this.display = !this.display;  
    
  }
  ngOnInit() {
  }

}
