import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Main } from './main/main';
import { Profile } from './profile/profile';
import { Skills } from './skills/skills';
import { footer } from './footer/footer';
import { AboutMe } from './about-me/about-me';

@Component({
  selector: 'app-root',
  imports: [Main,Navbar,footer,Profile,Skills,AboutMe,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'myPortfolio';
}
