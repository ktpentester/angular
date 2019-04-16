import { coursesService } from './courses.services';
import {Component} from '@angular/core';
@Component({
    selector: 'courses', 
  
    template: `
    <h1>Angular Application</h1>
    <h2>{{ title }}</h2>
    <ul>
    <li *ngFor="let course of courses">
    {{ course }}
    </li>
    </ul>
    `  
})
export class CoursesComponent{
    title="no of courses : 3";
      courses;
      constructor(service: coursesService){
        this.courses = service.getCourses(); 
      }
    }
                         


