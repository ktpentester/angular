import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  months = ["", "January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];

  years = ["","1991", "1992", "1993", "1994", "1995", "1996"];  

  days = ["", "1", "2", "3"];
  
  Name: string = "tarun";;

  Email: string = "tarun.devo0.y";; 

  colours:string[]=["red","yellow","green"]

  todaysdate:Date= new Date(); 
  
  include: boolean = true; 
  
  myClickFunction(_event) { 
    
    alert("Button is clicked");
 
  }
buttonClick(event)
{
   this.include = !this.include;
   console.log(event);
 }
  constructor() { 
  }
  ngOnInit() {
  }

}
