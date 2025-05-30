import { Component } from '@angular/core';
import { Search } from '../search/search';
import { Users } from '../users/users';
import usersData from './user.json';
@Component({
  selector: 'app-parent',
  imports: [Search, Users],
  templateUrl: './parent.html',
  styleUrls: ['./parent.css'],
})
export class Parent {
  users = usersData;

  filteredUsers = [...this.users];

  onSearch(email: string) {
    if (!email) {
      this.filteredUsers = [...this.users];
    } else {
      const lowerEmail = email.toLowerCase();
      this.filteredUsers = this.users.filter((user) =>
        user.email.toLowerCase().includes(lowerEmail)
      );
    }
  }
}
