import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { StressStudentTemplatesComponent } from './stress-student-templates/stress-student-templates.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    StressStudentTemplatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
