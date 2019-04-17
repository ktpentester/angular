import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lion',
  templateUrl: './lion.component.html',
  styleUrls: ['./lion.component.scss']
})
export class LionComponent implements OnInit {
id:string;
// this is the main route for  lion/123 which we are using as ActivatedRoute
constructor(private route:ActivatedRoute) { 

this.id=this.route.snapshot.paramMap.get("id");
  }
  ngOnInit() {
  }

}
