import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as a standalone component
  imports: [RouterOutlet], // Import RouterOutlet to recognize it
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  // Method to navigate to routes
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
