import { coursesService } from './courses.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FindmeComponent } from './findme/findme.component';
import { ColorsFilterPipe } from './colors-filter.pipe';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CoursesComponent } from './courses.components';
import { CourseComponent } from './course/course.component';
import { CatComponent } from './cat/cat.component';
import { KittenComponent } from './cat/kitten/kitten.component';
import { FoodService } from './food.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TigerComponent } from './tiger/tiger.component';
import { LionComponent } from './lion/lion.component';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';   
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FindmeComponent,
    ColorsFilterPipe,
    EmployeeListComponent,
    CoursesComponent,
    CourseComponent,
    CatComponent,
    KittenComponent,
    ParentComponent,
    ChildComponent,
    TigerComponent,
    LionComponent,
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DialogModule,BrowserAnimationsModule
  ],
  providers: [
    FoodService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }