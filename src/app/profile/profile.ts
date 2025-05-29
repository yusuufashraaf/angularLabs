import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  firstProjectName: string = 'Compiler project';
  secondProjectName: string = 'Twitter project';
  thirdProjectName: string = 'Portfolio';

  firstProjectDesc: string =
    'This project is a simple compiler designed to demonstrate and applyObject-Oriented Programming (OOP) principles such as Encapsulation, Abstraction, Inheritance,and Polymorphism.';
  secondProjectDesc: string =
    'This project is a simple website that demonstrates the use of HTML and CSS to build and style a responsive, user-friendly webpage.';
  thirdProjectDesc: string =
    'This project is a simple personal portfolio website that demonstrates the use of HTML and CSS to build and style a responsive, user-friendly webpage.';
}
