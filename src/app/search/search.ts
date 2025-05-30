import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class Search {
  searchValue: string = '';

  @Output() emailSearch = new EventEmitter<string>();

onSearch() {
  const trimmedEmail = this.searchValue.trim();
  
  if (trimmedEmail === '') {
    this.emailSearch.emit('');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmedEmail)) {
    alert('Please enter a valid email address.');
    return;
  }

  this.emailSearch.emit(trimmedEmail.toLowerCase());
}
}
