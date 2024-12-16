import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true, // Standalone component
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [CommonModule, FormsModule], // Add FormsModule
})
export class ProfileComponent {
  profile = {
    name: '',
    email: '',
    carsPurchased: 0,
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Profile Saved:', this.profile);
  }
}
