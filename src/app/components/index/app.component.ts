
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'UNIVERSITYMANAGEMENTSYSTEM';
  studentsList = [
    {	
      id : 1,
      first_name : "Sayoni",
      last_name : "Mazumdar",
      email : "sayoni@yopmail.com",
      phone : 9503733178,
      department : "Science"
    },
    {
      id : 2,
      first_name : "Aman",
      last_name : "Roy",
      email : "Aman@yopmail.com",
      phone : 8574889658,
      department : "Commerce"
    },
    {
      id : 3,
      first_name : "Titas",
      last_name : "Das",
      email : "titas@yopmail.com",
      phone : 7485889658,
      department : "Science"
    },
    {
      id : 4,
      first_name : "John",
      last_name : "Wills",
      email : "john@yopmail.com",
      phone : 9685589748,
      department : "Arts"
    },
    {
      id : 5,
      first_name : "Akash",
      last_name : "Dutta",
      email : "peter@yopmail.com",
      phone : 8595856547,
      department : "Engineering"
    }
    
    ];
    employeeList = [
      {	
        id : 1,
        first_name : "Ranvijay",
        last_name : "Singh",
        email : "ranvijay@yopmail.com",
        phone : 9503733178,
        department : "Science"
      },
      {
        id : 2,
        first_name : "Alisha",
        last_name : "Kaur",
        email : "alisha@yopmail.com",
        phone : 8574889658,
        department : "Commerce"
      },
      {
        id : 3,
        first_name : "Aditya",
        last_name : "Gupta",
        email : "aditya@yopmail.com",
        phone : 7485889658,
        department : "Science"
      },
      {
        id : 4,
        first_name : "Chris",
        last_name : "Evans",
        email : "evans@yopmail.com",
        phone : 9685589748,
        department : "Arts"
      },
      {
        id : 5,
        first_name : "Peter",
        last_name : "Parker",
        email : "peter@yopmail.com",
        phone : 8595856547,
        department : "Engineering"
      }
      
      ];
  
    constructor() {
      // Save students to localStorage
      localStorage.setItem('students', JSON.stringify(this.studentsList));
      localStorage.setItem('employee', JSON.stringify(this.employeeList));
    }

}
