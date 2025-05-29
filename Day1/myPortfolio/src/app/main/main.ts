import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  name :string = "Youssef Ashraf";
  specialize:string = "Web Developer Using PHP.";
  profileImage = 'assets/images/youssef.png';
}
