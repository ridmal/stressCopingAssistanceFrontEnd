import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
   doctor:Doctor= {
     id :1,
     name:"Nishantha"
   };
  constructor() { }

  ngOnInit() {
 
  }

}
