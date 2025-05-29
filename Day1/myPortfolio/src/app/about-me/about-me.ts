import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  aboutMeText: string = `I’m a full-stack web developer with over a year of hands-on experience building modern, scalable, and
  user-friendly web applications. I specialize in PHP with a strong focus on Laravel for backend
  development and use Angular to create dynamic, responsive frontends.`;

  personalInfo = {
    age: 26,
    residence: 'Egypt',
    email: 'yusuufashraaf@icloud.com',
    phone: '01144677813',
    freelance: 'Available',
  };

  goToMyCv(): void {
    window.location.href =
      'https://drive.google.com/file/d/1lk_uF7MrBGrcQSYhujUN5BlV29VQkDPa/view?usp=drive_link';
  }
}
