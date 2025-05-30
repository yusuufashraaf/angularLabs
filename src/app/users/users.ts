import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css'],
})
export class Users {
  @Input() users: User[] = [];
}

interface User {
  photo: string;
  username: string;
  email: string;
  phone: string;
  verified: string;
}
